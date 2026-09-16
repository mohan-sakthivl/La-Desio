// LA DESIO - Haute Patisserie Atmospheric Soundscape & Pre-Loader Curtain Engine
(function() {
  'use strict';

  class LaDesioSoundscape {
    constructor() {
      this.audioCtx = null;
      this.ambientAudio = null;
      this.isPlayingAmbient = false;
      this.isSoundEnabled = true;
      this.hasUserInteracted = false;
      this.userExplicitlyMuted = false;

      this.initAmbientAudio();
      this.setupPreloaderCurtain();
      this.setupAutoPlayOnEnter();
    }

    getAudioContext() {
      if (!this.audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.audioCtx = new AudioCtx();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    }

    // ==========================================
    // 1. DELICATE CRYSTAL CHIME (Web Audio API)
    // ==========================================
    playCrystalChime() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;

        // Frequencies for a luxury Parisian crystal bell: C6, E6, G6, C7
        const frequencies = [1046.5, 1318.5, 1567.98, 2093.0];
        const now = ctx.currentTime;

        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.04);

          // Crystal bell shimmer decay envelope
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.exponentialRampToValueAtTime(0.09 / (idx + 1), now + idx * 0.04 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + idx * 0.1);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + idx * 0.04);
          osc.stop(now + 1.4 + idx * 0.1);
        });
      } catch (err) {}
    }

    // ==========================================
    // 2. ATMOSPHERIC SALON JAZZ AMBIENCE
    // ==========================================
    initAmbientAudio() {
      this.ambientAudio = new Audio();
      this.ambientAudio.src = 'https://assets.mixkit.co/music/preview/mixkit-chill-bro-494.mp3';
      this.ambientAudio.loop = true;
      this.ambientAudio.volume = 0.28;
      this.ambientAudio.preload = 'auto';

      this.ambientAudio.onerror = () => {
        this.ambientAudio.src = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3';
      };
    }

    // Automatic playback when patron comes into the website
    setupAutoPlayOnEnter() {
      const startMusic = () => {
        if (this.isPlayingAmbient || this.userExplicitlyMuted) return;
        this.getAudioContext();
        if (this.ambientAudio) {
          const playPromise = this.ambientAudio.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              this.isPlayingAmbient = true;
              this.updateSoundUI();
              cleanupListeners();
            }).catch(() => {
              // Wait for user click / touch / scroll gesture
            });
          }
        }
      };

      const onFirstGesture = () => {
        if (!this.hasUserInteracted) {
          this.hasUserInteracted = true;
          startMusic();
        }
      };

      const cleanupListeners = () => {
        window.removeEventListener('click', onFirstGesture);
        window.removeEventListener('touchstart', onFirstGesture);
        window.removeEventListener('scroll', onFirstGesture);
        window.removeEventListener('keydown', onFirstGesture);
      };

      if (document.readyState === 'complete') {
        startMusic();
      } else {
        window.addEventListener('load', startMusic);
      }

      window.addEventListener('click', onFirstGesture, { passive: true });
      window.addEventListener('touchstart', onFirstGesture, { passive: true });
      window.addEventListener('scroll', onFirstGesture, { passive: true });
      window.addEventListener('keydown', onFirstGesture, { passive: true });
    }

    toggleSoundscape() {
      if (!this.isPlayingAmbient) {
        this.userExplicitlyMuted = false;
        this.getAudioContext();
        if (this.ambientAudio) {
          this.ambientAudio.play().then(() => {
            this.isPlayingAmbient = true;
            this.updateSoundUI();
            this.playCrystalChime();
            if (window.showToast) window.showToast('♫ Parisian Salon Music Playing', 'success');
          }).catch(() => {
            if (window.showToast) window.showToast('Tap to enable audio playback', 'info');
          });
        }
      } else {
        this.userExplicitlyMuted = true;
        if (this.ambientAudio) {
          this.ambientAudio.pause();
        }
        this.isPlayingAmbient = false;
        this.updateSoundUI();
        if (window.showToast) window.showToast('♫ Parisian Salon Music Muted', 'info');
      }
    }

    setVolume(vol) {
      const volume = Math.max(0, Math.min(1, parseFloat(vol)));
      if (this.ambientAudio) {
        this.ambientAudio.volume = volume;
      }
    }

    updateSoundUI() {
      // Update all minimal music icon buttons
      document.querySelectorAll('.soundscape-toggle-btn').forEach(btn => {
        const pulseDot = btn.querySelector('.soundscape-pulse-dot');
        const text = btn.querySelector('.soundscape-btn-text');

        if (this.isPlayingAmbient) {
          btn.classList.add('soundscape-active', 'text-[#E6CA85]');
          btn.setAttribute('title', 'Parisian Salon Music (Playing - Click to Mute)');
          if (pulseDot) pulseDot.classList.remove('hidden');
          if (text) text.textContent = 'Mute';
        } else {
          btn.classList.remove('soundscape-active');
          btn.setAttribute('title', 'Parisian Salon Music (Muted - Click to Play)');
          if (pulseDot) pulseDot.classList.add('hidden');
          if (text) text.textContent = 'Music';
        }
      });
    }

    // ==========================================
    // 3. GILDED MONOGRAM PRE-LOADER CURTAIN
    // ==========================================
    setupPreloaderCurtain() {
      const curtain = document.getElementById('atelierCurtainLoader');
      const progress = document.getElementById('curtainProgressBar');
      if (!curtain) return;

      if (progress) {
        setTimeout(() => { progress.style.width = '45%'; }, 150);
        setTimeout(() => { progress.style.width = '85%'; }, 450);
        setTimeout(() => { progress.style.width = '100%'; }, 750);
      }

      const dismissCurtain = () => {
        if (!curtain.classList.contains('curtain-parted')) {
          curtain.classList.add('curtain-parted');
          setTimeout(() => {
            curtain.style.display = 'none';
          }, 1100);
        }
      };

      if (document.readyState === 'complete') {
        setTimeout(dismissCurtain, 900);
      } else {
        window.addEventListener('load', () => setTimeout(dismissCurtain, 800));
        setTimeout(dismissCurtain, 1600);
      }
    }

    // Public method to trigger luxury curtain reveal for key transitions
    showCurtain(title = 'LA DESIO', subtitle = 'Haute Patisserie & Atelier', durationMs = 1200, onComplete = null) {
      const curtain = document.getElementById('atelierCurtainLoader');
      const progress = document.getElementById('curtainProgressBar');
      const titleElem = curtain ? curtain.querySelector('h1') : null;
      const subtitleElem = curtain ? curtain.querySelector('p') : null;

      if (!curtain) {
        if (typeof onComplete === 'function') onComplete();
        return;
      }

      if (titleElem) titleElem.textContent = title;
      if (subtitleElem) subtitleElem.textContent = subtitle;

      curtain.style.display = 'flex';
      curtain.classList.remove('curtain-parted');
      if (progress) {
        progress.style.width = '0%';
        setTimeout(() => { progress.style.width = '60%'; }, 100);
        setTimeout(() => { progress.style.width = '100%'; }, durationMs * 0.7);
      }

      setTimeout(() => {
        curtain.classList.add('curtain-parted');
        setTimeout(() => {
          curtain.style.display = 'none';
          if (titleElem) titleElem.textContent = 'LA DESIO';
          if (subtitleElem) subtitleElem.textContent = 'Haute Patisserie & Atelier';
        }, 800);
        if (typeof onComplete === 'function') onComplete();
      }, durationMs);
    }
  }

  if (typeof window !== 'undefined') {
    window.ladesioSoundscape = new LaDesioSoundscape();
  }
})();
