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
    // 1B. CELEBRATION PARTY POPPERS, PONGS & BANGS (Web Audio API)
    // ==========================================
    playPopperBang(timeOffset = 0, pitchMod = 1.0) {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const t = ctx.currentTime + timeOffset;

        // 1. Noise burst for the "POP / BANG" snap
        const bufferSize = Math.floor(ctx.sampleRate * 0.18);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.035));
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3400 * pitchMod, t);
        filter.frequency.exponentialRampToValueAtTime(100, t + 0.15);
        filter.Q.setValueAtTime(3.5, t);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, t);
        noiseGain.gain.linearRampToValueAtTime(0.55, t + 0.004);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);

        whiteNoise.connect(filter);
        filter.connect(noiseGain);

        // 2. Sub-bass physical punch ("THUMP / BANG")
        const bassOsc = ctx.createOscillator();
        const bassGain = ctx.createGain();
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(240 * pitchMod, t);
        bassOsc.frequency.exponentialRampToValueAtTime(36, t + 0.14);

        bassGain.gain.setValueAtTime(0.001, t);
        bassGain.gain.linearRampToValueAtTime(0.65, t + 0.006);
        bassGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

        bassOsc.connect(bassGain);

        // 3. Resonant Metallic "PONG" Bell
        const pongOsc = ctx.createOscillator();
        const pongGain = ctx.createGain();
        pongOsc.type = 'sine';
        pongOsc.frequency.setValueAtTime(880 * pitchMod, t);
        pongOsc.frequency.exponentialRampToValueAtTime(440 * pitchMod, t + 0.3);

        pongGain.gain.setValueAtTime(0.001, t);
        pongGain.gain.linearRampToValueAtTime(0.38, t + 0.005);
        pongGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);

        pongOsc.connect(pongGain);

        // Connect to master output
        noiseGain.connect(ctx.destination);
        bassGain.connect(ctx.destination);
        pongGain.connect(ctx.destination);

        whiteNoise.start(t);
        whiteNoise.stop(t + 0.2);
        bassOsc.start(t);
        bassOsc.stop(t + 0.2);
        pongOsc.start(t);
        pongOsc.stop(t + 0.4);
      } catch (e) {}
    }

    playCelebrationPopsAndBangs() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;

        // Sequence of festive party popper bangs and pongs
        this.playPopperBang(0.00, 1.15);  // High snap pop
        this.playPopperBang(0.12, 0.85);  // Deep satisfying bang
        this.playPopperBang(0.24, 1.30);  // Crisp popper
        this.playPopperBang(0.38, 0.95);  // Grand finale bang!

        // Accompanying celebration fanfare arpeggio (Sparkling celebration chimes)
        const fanfareNotes = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98, 2093.0]; // C5 to C7
        const now = ctx.currentTime + 0.12;

        fanfareNotes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.055);

          gain.gain.setValueAtTime(0.001, now + idx * 0.055);
          gain.gain.exponentialRampToValueAtTime(0.12 / (idx * 0.3 + 1), now + idx * 0.055 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.055 + 1.2);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + idx * 0.055);
          osc.stop(now + idx * 0.055 + 1.3);
        });
      } catch (err) {}
    }


    // ==========================================
    // 1B-2. CELEBRATORY CLAPS & HURRAY! (CROWD APPLAUSE & CHEERS)
    // ==========================================
    playClapsHurraySound() {
      try {
        // 1. Play master audio file: Audience Clapping & "Hurray! Hooray!" crowd celebration
        try {
          const cheerAudio = new Audio('Assets/claps_hurray.wav?v=5.3.0');
          cheerAudio.volume = 1.0;
          const p = cheerAudio.play();
          if (p && typeof p.catch === 'function') {
            p.catch(() => {});
          }
        } catch (e) {}

        // 2. Synthesize instantaneous audience applause clatter & vocal cheer burst via Web Audio API
        const ctx = this.getAudioContext();
        if (ctx) {
          if (ctx.state === 'suspended') {
            ctx.resume();
          }

          const now = ctx.currentTime;

          // Synthesize 24 rapid hand claps spread in time
          for (let i = 0; i < 24; i++) {
            const clapTime = now + 0.05 + i * 0.085 + (Math.random() - 0.5) * 0.03;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1100 + Math.random() * 800, clapTime);

            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1400 + Math.random() * 600, clapTime);
            filter.Q.setValueAtTime(3.0, clapTime);

            gain.gain.setValueAtTime(0.001, clapTime);
            gain.gain.linearRampToValueAtTime(0.40, clapTime + 0.003);
            gain.gain.exponentialRampToValueAtTime(0.0001, clapTime + 0.045);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            osc.start(clapTime);
            osc.stop(clapTime + 0.05);
          }

          // Cheerful warm chord swell ("Hurray!" harmonic resonance)
          [261.63, 329.63, 392.00, 523.25].forEach((f, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now + 0.08);
            osc.frequency.linearRampToValueAtTime(f * 1.25, now + 0.9);

            gain.gain.setValueAtTime(0.001, now + 0.08);
            gain.gain.linearRampToValueAtTime(0.35 / (idx + 1), now + 0.25);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + 0.08);
            osc.stop(now + 1.65);
          });
        }

        // 3. Optional browser Speech Synthesis cheer if supported
        try {
          if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            const utter = new SpeechSynthesisUtterance("Hurray! Hooray!");
            utter.rate = 1.3;
            utter.pitch = 1.2;
            utter.volume = 0.9;
            window.speechSynthesis.speak(utter);
          }
        } catch (err) {}

        // Synchronized celebration visual confetti
        this.triggerCelebrationEffects();
      } catch (err) {}
    }

    playLotteryWinSound() {
      this.playClapsHurraySound();
    }

    playBuzzerSound() {
      this.playClapsHurraySound();
    }

    playHappyBirthdayTune() {
      this.playClapsHurraySound();
    }


    // ==========================================
    // 1C. SPECTACULAR CONFETTI, STREAMERS & EMOJI CANNONS
    // ==========================================
    triggerCelebrationEffects() {
      try {
        const containerId = 'ladesioGlobalCelebrationContainer';
        let container = document.getElementById(containerId);
        if (container) container.remove();

        container = document.createElement('div');
        container.id = containerId;
        container.className = 'fixed inset-0 pointer-events-none z-[99999] overflow-hidden';
        document.body.appendChild(container);

        const colors = ['#B8945B', '#E6CA85', '#10B981', '#F59E0B', '#FFFDF9', '#EC4899', '#8B5CF6', '#F43F5E', '#3B82F6', '#FBBF24'];
        const emojis = ['🎂', '🎉', '👑', '✨', '🥳', '🍾', '⭐', '🎊', '🎁'];

        // 1. Dual-Cannon Streamers & Confetti (from left and right bottom)
        const pieceCount = 90;
        for (let i = 0; i < pieceCount; i++) {
          const piece = document.createElement('div');
          const isEmoji = Math.random() < 0.24;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const fromLeft = Math.random() > 0.5;
          const startX = fromLeft ? (Math.random() * 20) : (80 + Math.random() * 20); // vw
          const targetX = fromLeft ? (startX + Math.random() * 50 + 10) : (startX - (Math.random() * 50 + 10)); // vw
          const targetY = Math.random() * 65 + 10; // vh
          const animDuration = Math.random() * 1.5 + 2.2; // 2.2s - 3.7s
          const animDelay = Math.random() * 0.35;

          if (isEmoji) {
            piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            piece.style.fontSize = (Math.random() * 14 + 20) + 'px';
            piece.style.lineHeight = '1';
          } else {
            const size = Math.random() * 9 + 6;
            piece.style.width = size + 'px';
            piece.style.height = (size * (Math.random() > 0.5 ? 2.2 : 0.8)) + 'px';
            piece.style.backgroundColor = color;
            piece.style.borderRadius = Math.random() > 0.3 ? '2px' : '50%';
            piece.style.boxShadow = `0 0 6px ${color}`;
          }

          piece.style.position = 'absolute';
          piece.style.bottom = '-30px';
          piece.style.left = startX + 'vw';
          piece.style.opacity = '1';
          piece.style.transform = `rotate(${Math.random() * 360}deg) scale(0.3)`;
          piece.style.transition = `transform ${animDuration}s cubic-bezier(0.18, 0.9, 0.32, 1), bottom ${animDuration}s cubic-bezier(0.18, 0.9, 0.32, 1), opacity ${animDuration}s ease-in`;

          container.appendChild(piece);

          requestAnimationFrame(() => {
            setTimeout(() => {
              piece.style.bottom = targetY + 'vh';
              piece.style.transform = `rotate(${Math.random() * 1440 - 720}deg) translateX(${targetX - startX}vw) scale(1)`;
              piece.style.opacity = '0';
            }, animDelay * 1000 + 20);
          });
        }

        // 2. Center Top Shower (Golden ribbons drifting down)
        const showerCount = 50;
        for (let j = 0; j < showerCount; j++) {
          const shower = document.createElement('div');
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 8 + 5;
          const left = Math.random() * 96 + 2;
          const animDuration = Math.random() * 2 + 2.5;
          const animDelay = Math.random() * 0.5 + 0.1;

          shower.style.position = 'absolute';
          shower.style.top = '-20px';
          shower.style.left = left + 'vw';
          shower.style.width = size + 'px';
          shower.style.height = (size * 1.5) + 'px';
          shower.style.backgroundColor = color;
          shower.style.borderRadius = '2px';
          shower.style.opacity = '1';
          shower.style.transform = `rotate(${Math.random() * 360}deg)`;
          shower.style.transition = `transform ${animDuration}s cubic-bezier(0.25, 1, 0.5, 1), top ${animDuration}s cubic-bezier(0.25, 1, 0.5, 1), opacity ${animDuration}s ease-in`;

          container.appendChild(shower);

          requestAnimationFrame(() => {
            setTimeout(() => {
              shower.style.top = (Math.random() * 35 + 75) + 'vh';
              shower.style.transform = `rotate(${Math.random() * 1080 - 540}deg) translateX(${Math.random() * 160 - 80}px)`;
              shower.style.opacity = '0';
            }, animDelay * 1000 + 20);
          });
        }

        // Auto remove container after animations finish
        setTimeout(() => {
          if (container && container.parentNode) container.remove();
        }, 5000);
      } catch (e) {}
    }
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

      // Ensure curtain is visibly active on refresh
      curtain.style.display = 'flex';
      curtain.classList.remove('curtain-parted');

      if (progress) {
        progress.style.width = '0%';
        setTimeout(() => { progress.style.width = '45%'; }, 80);
        setTimeout(() => { progress.style.width = '85%'; }, 240);
        setTimeout(() => { progress.style.width = '100%'; }, 420);
      }

      const dismissCurtain = () => {
        if (!curtain.classList.contains('curtain-parted')) {
          curtain.classList.add('curtain-parted');
          setTimeout(() => {
            curtain.style.display = 'none';
          }, 450);
        }
      };

      if (document.readyState === 'complete') {
        setTimeout(dismissCurtain, 550);
      } else {
        window.addEventListener('load', () => setTimeout(dismissCurtain, 500));
        setTimeout(dismissCurtain, 900);
      }
    }

    // Public method to trigger luxury curtain reveal for millisecond page transitions
    showCurtain(title = 'LA DESIO', subtitle = 'Haute Patisserie & Atelier', durationMs = 380, onComplete = null) {
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

      // Clear any pending timeouts to avoid race conditions during fast clicking
      if (this._curtainDismissTimer) clearTimeout(this._curtainDismissTimer);
      if (this._curtainHideTimer) clearTimeout(this._curtainHideTimer);
      if (this._curtainSwitchTimer) clearTimeout(this._curtainSwitchTimer);

      curtain.style.display = 'flex';
      curtain.classList.remove('curtain-parted');

      if (progress) {
        progress.style.width = '0%';
        setTimeout(() => { progress.style.width = '55%'; }, 40);
        setTimeout(() => { progress.style.width = '100%'; }, Math.max(120, Math.floor(durationMs * 0.45)));
      }

      // Execute view transition while the curtain is fully opaque
      const switchTime = Math.max(160, Math.floor(durationMs * 0.6));
      this._curtainSwitchTimer = setTimeout(() => {
        if (typeof onComplete === 'function') onComplete();
      }, switchTime);

      // Part the curtain smoothly
      this._curtainDismissTimer = setTimeout(() => {
        curtain.classList.add('curtain-parted');
        this._curtainHideTimer = setTimeout(() => {
          curtain.style.display = 'none';
          if (titleElem) titleElem.textContent = 'LA DESIO';
          if (subtitleElem) subtitleElem.textContent = 'Haute Patisserie & Atelier';
        }, 420);
      }, durationMs);
    }
  }

  if (typeof window !== 'undefined') {
    window.ladesioSoundscape = new LaDesioSoundscape();
    window.triggerCelebrationEffects = () => {
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.triggerCelebrationEffects === 'function') {
        window.ladesioSoundscape.triggerCelebrationEffects();
      }
    };
    window.playCelebrationPopsAndBangs = () => {
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.playCelebrationPopsAndBangs === 'function') {
        window.ladesioSoundscape.playCelebrationPopsAndBangs();
      }
    };
    window.playClapsHurraySound = () => {
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.playClapsHurraySound === 'function') {
        window.ladesioSoundscape.playClapsHurraySound();
      }
    };
    window.playLotteryWinSound = () => {
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.playClapsHurraySound === 'function') {
        window.ladesioSoundscape.playClapsHurraySound();
      }
    };
    window.playBirthdaySound = () => {
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.playClapsHurraySound === 'function') {
        window.ladesioSoundscape.playClapsHurraySound();
      }
    };
    window.playBuzzerSound = () => {
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.playClapsHurraySound === 'function') {
        window.ladesioSoundscape.playClapsHurraySound();
      }
    };
    window.playHappyBirthdayTune = () => {
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.playClapsHurraySound === 'function') {
        window.ladesioSoundscape.playClapsHurraySound();
      }
    };
  }
})();
