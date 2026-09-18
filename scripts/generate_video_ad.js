// scripts/generate_video_ad.js
// Ultra-Cinematic AI-Generated Style Commercial Video Ad for LA DESIO (10-Second Fast-Paced Cut)
// Features 7 signature desserts with zero distortion/stretching, dynamic speed-ramped camera motion,
// and culminates in a dramatic fade to pitch-black revealing the glowing golden emblem & logo.

const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = process.cwd();
const ffmpegPath = path.join(rootDir, 'node_modules', 'ffmpeg-static', 'ffmpeg.exe');
const videoDir = path.join(rootDir, 'Assets', 'video');
const rawDir = path.join(videoDir, 'raw');

if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });
if (!fs.existsSync(rawDir)) fs.mkdirSync(rawDir, { recursive: true });

function runFFmpeg(args, desc) {
  console.log(`[FFmpeg] Starting: ${desc}...`);
  const res = spawnSync(ffmpegPath, args, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
  if (res.status !== 0) {
    console.error(`[FFmpeg Error] ${desc} failed:`, res.stderr);
    throw new Error(`FFmpeg failed: ${desc}`);
  }
  console.log(`[FFmpeg] Completed: ${desc}`);
}

// 1. Scene definitions for 7 signature desserts (1.1s each, fast-paced commercial montage)
const scenes = [
  {
    id: 'scene1',
    image: path.join(rawDir, 'dessert1_velvet_noir.jpg'),
    badge: 'SIGNATURE RESERVE',
    title: 'Velvet Noir Royale',
    subtitle: '72% Single-Origin Cocoa • 24K Gold Leaf',
    yRatio: 0.35,
    // Kinetic push-in speed ramp
    getZoomExpr: (N) => `1.04+0.16*sin((on/${N})*PI/2)`,
    getXExpr: (N) => '(iw-iw/zoom)/2',
    getYExpr: (N) => '(ih-ih/zoom)/2',
    duration: 1.1
  },
  {
    id: 'scene2',
    image: path.join(rawDir, 'dessert2_pistachio.jpg'),
    badge: 'CLASSIC ITALIAN',
    title: 'Sicilian Pistachio Royale',
    subtitle: 'Authentic Bronte Pistachio Cream & Sablé',
    yRatio: 0.22,
    // Kinetic diagonal drift speed ramp
    getZoomExpr: (N) => `1.04+0.14*sin((on/${N})*PI/2)`,
    getXExpr: (N) => `(iw-iw/zoom)*(0.3+0.4*sin((on/${N})*PI/2))`,
    getYExpr: (N) => '(ih-ih/zoom)/2',
    duration: 1.1
  },
  {
    id: 'scene3',
    image: path.join(rawDir, 'dessert3_strawberry_tart.jpg'),
    badge: 'SEASONAL ATELIER',
    title: 'Wild Strawberry Grand Tart',
    subtitle: 'Alpine Wild Berries & Tahitian Vanilla',
    yRatio: 0.42,
    // Kinetic macro pull-back speed ramp
    getZoomExpr: (N) => `1.18-0.14*sin((on/${N})*PI/2)`,
    getXExpr: (N) => '(iw-iw/zoom)/2',
    getYExpr: (N) => '(ih-ih/zoom)/2',
    duration: 1.1
  },
  {
    id: 'scene4',
    image: path.join(rawDir, 'dessert4_caramel_etoile.jpg'),
    badge: 'CHEF SELECTION',
    title: 'Salted Caramel Étoile',
    subtitle: 'Slow-Simmered Salted Caramel & Pecans',
    yRatio: 0.35,
    // Kinetic upward glide speed ramp
    getZoomExpr: (N) => `1.04+0.15*sin((on/${N})*PI/2)`,
    getXExpr: (N) => '(iw-iw/zoom)/2',
    getYExpr: (N) => '(ih-ih/zoom)/2',
    duration: 1.1
  },
  {
    id: 'scene5',
    image: path.join(rawDir, 'dessert5_tiramisu.jpg'),
    badge: 'AUTHENTIC MILANESE',
    title: 'Tiramisu Classico',
    subtitle: 'Espresso Savoiardi & Cocoa Velvet',
    yRatio: 0.85,
    // Kinetic push-in
    getZoomExpr: (N) => `1.04+0.16*sin((on/${N})*PI/2)`,
    getXExpr: (N) => '(iw-iw/zoom)/2',
    getYExpr: (N) => '(ih-ih/zoom)/2',
    duration: 1.1
  },
  {
    id: 'scene6',
    image: path.join(rawDir, 'dessert6_brownie.jpg'),
    badge: 'ARTISANAL CHOCOLATIER',
    title: 'Fudge Noir Brownie',
    subtitle: 'Molten Valrhona Cocoa & Roasted Hazelnuts',
    yRatio: 0.65,
    // Kinetic diagonal push
    getZoomExpr: (N) => `1.06+0.14*sin((on/${N})*PI/2)`,
    getXExpr: (N) => `(iw-iw/zoom)*(0.55-0.1*sin((on/${N})*PI/2))`,
    getYExpr: (N) => '(ih-ih/zoom)/2',
    duration: 1.1
  },
  {
    id: 'scene7',
    image: path.join(rawDir, 'dessert7_blueberry.jpg'),
    badge: 'NATURAL HARVEST',
    title: 'Wild Berry Mascarpone',
    subtitle: 'Forest Blueberries & Madagascan Vanilla',
    yRatio: 0.35,
    // Kinetic zoom & focus
    getZoomExpr: (N) => `1.04+0.15*sin((on/${N})*PI/2)`,
    getXExpr: (N) => '(iw-iw/zoom)/2',
    getYExpr: (N) => '(ih-ih/zoom)/2',
    duration: 1.1
  }
];

// Step 1: Render 7 High-Energy Speed-Ramped Dessert Shots
console.log('--- Step 1: Rendering 7 Cinematic Dessert Shots ---');
const sceneVideoFiles = [];

scenes.forEach((sc, idx) => {
  const outPath = path.join(videoDir, `${sc.id}.mp4`);
  sceneVideoFiles.push(outPath);

  const frames = Math.round(sc.duration * 30);
  const zExpr = sc.getZoomExpr(frames);
  const xExpr = sc.getXExpr(frames);
  const yExpr = sc.getYExpr(frames);

  // 1. scale=3840:2160:force_original_aspect_ratio=increase + crop guarantees ZERO stretching/distortion!
  // 2. Custom calibrated yRatio ensures dessert subject is centered with full view of plate/toppers!
  // 3. zoompan runs at 4K resolution (3840x2160) for sub-pixel jitter elimination.
  // 4. Lanczos downscaling to 1080p + color grading gives rich cinema pop without any burned-in blocking overlays.
  const filter = [
    'scale=3840:2160:force_original_aspect_ratio=increase',
    `crop=3840:2160:(in_w-3840)/2:(in_h-2160)*${sc.yRatio}`,
    `zoompan=z='${zExpr}':x='${xExpr}':y='${yExpr}':d=${frames}:s=3840x2160:fps=30`,
    'scale=1920:1080:flags=lanczos',
    'eq=contrast=1.12:brightness=0.01:saturation=1.22'
  ].join(',');

  const args = [
    '-y',
    '-loop', '1',
    '-i', sc.image,
    '-vf', filter,
    '-t', sc.duration.toString(),
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '18',
    '-pix_fmt', 'yuv420p',
    outPath
  ];

  runFFmpeg(args, `Shot ${idx + 1} (${sc.title})`);
});

// Step 2: Render Grand Finale Scene (Dip into Black -> Reveal Gold Monogram & Logo)
console.log('--- Step 2: Rendering Logo Finale Scene ---');
const finalePath = path.join(videoDir, 'scene8_finale.mp4');
const emblemImg = path.join(rootDir, 'Assets', 'Logo', 'emblem_transparent.png');
const logoGoldImg = path.join(rootDir, 'Assets', 'Logo', 'logo_gold_transparent.png');

// Duration: 3.2s
// 0.0 - 0.4s: Total pitch-black blackout transition
// 0.4 - 1.4s: Gold emblem and wordmark materialize with ambient glow
// 1.4 - 2.8s: Fully revealed with tagline
// 2.8 - 3.2s: Soft luxury dip
const finaleFilter = [
  '[1:v]scale=290:290,format=rgba,fade=t=in:st=0.35:d=0.9:alpha=1,fade=t=out:st=2.8:d=0.4:alpha=1[emb]',
  '[2:v]scale=550:-1,format=rgba,fade=t=in:st=0.55:d=0.9:alpha=1,fade=t=out:st=2.8:d=0.4:alpha=1[logo]',
  '[0:v][emb]overlay=x=(W-w)/2:y=210:format=auto[bg1]',
  '[bg1][logo]overlay=x=(W-w)/2:y=515:format=auto[bg2]',
  `[bg2]drawtext=fontfile='C\\:/Windows/Fonts/georgia.ttf':text='WHERE CRAVINGS BECOME CREATIONS':fontsize=26:fontcolor=0xE6CA85:x=(w-text_w)/2:y=670:alpha='min(1,max(0,(t-0.8)*1.5))*min(1,max(0,(3.2-t)*2.5))',` +
  `drawtext=fontfile='C\\:/Windows/Fonts/georgia.ttf':text='FINE ITALIAN LUXURY PATISSERIE':fontsize=16:fontcolor=0xB8945B:x=(w-text_w)/2:y=715:alpha='min(1,max(0,(t-1.0)*1.5))*min(1,max(0,(3.2-t)*2.5))'[out]`
].join(';');

const finaleArgs = [
  '-y',
  '-f', 'lavfi', '-i', 'color=c=0x050201:s=1920x1080:d=3.2:r=30',
  '-loop', '1', '-i', emblemImg,
  '-loop', '1', '-i', logoGoldImg,
  '-filter_complex', finaleFilter,
  '-map', '[out]',
  '-t', '3.2',
  '-c:v', 'libx264',
  '-preset', 'fast',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  finalePath
];

runFFmpeg(finaleArgs, 'Logo Reveal Finale Scene');

// Step 3: Concatenate 7 Dessert Shots + Finale with Snappy Transitions
console.log('--- Step 3: Concatenating Rapid Montage with Cross-Dissolves ---');
const combinedVideoPath = path.join(videoDir, 'combined_video.mp4');

// Shot duration: 1.1s each. Crossfade duration: 0.15s.
// Offset 1: 0.95s
// Offset 2: 0.95 + 0.95 = 1.90s
// Offset 3: 1.90 + 0.95 = 2.85s
// Offset 4: 2.85 + 0.95 = 3.80s
// Offset 5: 3.80 + 0.95 = 4.75s
// Offset 6: 4.75 + 0.95 = 5.70s
// Finale (Blackout): offset 6.65s, transition=fadeblack with 0.3s dip!
// Total duration = 6.65 + 3.2 = ~9.85s!
const xfadeFilter = [
  '[0:v][1:v]xfade=transition=fade:duration=0.15:offset=0.95[v01]',
  '[v01][2:v]xfade=transition=fade:duration=0.15:offset=1.90[v02]',
  '[v02][3:v]xfade=transition=fade:duration=0.15:offset=2.85[v03]',
  '[v03][4:v]xfade=transition=fade:duration=0.15:offset=3.80[v04]',
  '[v04][5:v]xfade=transition=fade:duration=0.15:offset=4.75[v05]',
  '[v05][6:v]xfade=transition=fade:duration=0.15:offset=5.70[v06]',
  '[v06][7:v]xfade=transition=fadeblack:duration=0.35:offset=6.65[vout]'
].join(';');

const concatArgs = [
  '-y',
  '-i', sceneVideoFiles[0],
  '-i', sceneVideoFiles[1],
  '-i', sceneVideoFiles[2],
  '-i', sceneVideoFiles[3],
  '-i', sceneVideoFiles[4],
  '-i', sceneVideoFiles[5],
  '-i', sceneVideoFiles[6],
  '-i', finalePath,
  '-filter_complex', xfadeFilter,
  '-map', '[vout]',
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '18',
  '-pix_fmt', 'yuv420p',
  combinedVideoPath
];

runFFmpeg(concatArgs, 'Crossfading 7 Shots + Finale');

// Step 4: Synthesize High-Energy Commercial Soundtrack (10.0s)
console.log('--- Step 4: Generating Rhythmic Luxury Commercial Audio ---');
const audioWavPath = path.join(videoDir, 'soundtrack.wav');
const sampleRate = 48000;
const totalDuration = 10.0;
const totalSamples = Math.floor(sampleRate * totalDuration);
const buffer = Buffer.alloc(44 + totalSamples * 4);

function writeWavHeader(buf, samples, sRate) {
  const dataSize = samples * 4;
  buf.write('RIFF', 0);
  buf.writeUInt32LE(36 + dataSize, 4);
  buf.write('WAVE', 8);
  buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(sRate, 24);
  buf.writeUInt32LE(sRate * 4, 28);
  buf.writeUInt16LE(4, 32);
  buf.writeUInt16LE(16, 34);
  buf.write('data', 36);
  buf.writeUInt32LE(dataSize, 40);
}

writeWavHeader(buffer, totalSamples, sampleRate);

const noteFreqs = {
  C2: 65.41, E2: 82.41, G2: 98.00, A2: 110.00,
  C3: 130.81, E3: 164.81, G3: 196.00, A3: 220.00,
  C4: 261.63, D4: 293.66, E4: 329.63, G4: 392.00, A4: 440.00,
  C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.00,
  C6: 1046.50, E6: 1318.51, G6: 1567.98
};

// Punchy sub-bass impact whoosh
function subBassHit(t, hitTime, duration = 0.5) {
  if (t < hitTime || t > hitTime + duration) return 0;
  const dt = t - hitTime;
  const env = Math.exp(-6.0 * dt);
  const freq = 75 * Math.exp(-4.0 * dt); // pitch drops from 75Hz to 30Hz
  return env * Math.sin(2 * Math.PI * freq * dt);
}

// Sparkling chime hit
function chime(t, hitTime, freq, decay = 3.5) {
  if (t < hitTime) return 0;
  const dt = t - hitTime;
  const attack = Math.min(dt / 0.005, 1);
  const env = attack * Math.exp(-decay * dt);
  const s1 = Math.sin(2 * Math.PI * freq * dt);
  const s2 = 0.4 * Math.sin(2 * Math.PI * freq * 2.76 * dt);
  const s3 = 0.2 * Math.sin(2 * Math.PI * freq * 5.4 * dt);
  return env * (s1 + s2 + s3);
}

// Warm ambient pad
function warmPad(t, startT, endT, rootFreq) {
  if (t < startT || t > endT) return 0;
  const dur = endT - startT;
  const rel = t - startT;
  const env = Math.sin((rel / dur) * Math.PI);
  const s1 = Math.sin(2 * Math.PI * rootFreq * t);
  const s2 = 0.6 * Math.sin(2 * Math.PI * rootFreq * 1.5 * t);
  const s3 = 0.3 * Math.sin(2 * Math.PI * rootFreq * 2.0 * t);
  return env * (s1 + s2 + s3);
}

// Cinematic riser building into the blackout
function riser(t, startT, endT) {
  if (t < startT || t > endT) return 0;
  const progress = (t - startT) / (endT - startT);
  const env = Math.pow(progress, 2.5); // exponential build
  const freq = 120 + 380 * Math.pow(progress, 2); // rises from 120Hz to 500Hz
  return env * Math.sin(2 * Math.PI * freq * t) * 0.22;
}

let offset = 44;
// Shot timestamps: 0.0, 0.95, 1.90, 2.85, 3.80, 4.75, 5.70, Finale: 6.65
const shotTimes = [0.0, 0.95, 1.90, 2.85, 3.80, 4.75, 5.70];
const chimeNotes = [noteFreqs.C5, noteFreqs.E5, noteFreqs.G5, noteFreqs.A5, noteFreqs.C6, noteFreqs.D5, noteFreqs.E5];

for (let i = 0; i < totalSamples; i++) {
  const t = i / sampleRate;
  let left = 0;
  let right = 0;

  // 1. Rhythmic Sub-Bass Hits & Sparkle Chimes on each dessert cut
  shotTimes.forEach((st, idx) => {
    const sub = subBassHit(t, st) * 0.35;
    const ch = chime(t, st + 0.03, chimeNotes[idx], 4.0) * 0.22;
    // Alternate stereo panning
    if (idx % 2 === 0) {
      left += sub + ch * 1.2;
      right += sub + ch * 0.8;
    } else {
      left += sub + ch * 0.8;
      right += sub + ch * 1.2;
    }
  });

  // 2. Continuous Driving Background Harmonic Pad
  const pad = warmPad(t, 0.0, 6.7, noteFreqs.C3) * 0.22;
  left += pad; right += pad;

  // 3. Cinematic Tension Riser building into the blackout (5.4s to 6.65s)
  const rise = riser(t, 5.2, 6.65);
  left += rise; right += rise;

  // 4. Finale Blackout Impact & Celestial Gold Reveal Chords (6.7s - 10.0s)
  const finaleSub = subBassHit(t, 6.7, 1.2) * 0.50; // Deep cinematic drop!
  const goldPad = warmPad(t, 6.7, 10.0, noteFreqs.C2) * 0.35;
  const goldPadTreble = warmPad(t, 6.9, 10.0, noteFreqs.G3) * 0.20;

  left += finaleSub + goldPad + goldPadTreble;
  right += finaleSub + goldPad + goldPadTreble;

  // Radiant Golden Chime Arpeggio on Logo Reveal
  left  += chime(t, 6.85, noteFreqs.C4, 1.5) * 0.25;
  right += chime(t, 7.00, noteFreqs.G4, 1.4) * 0.25;
  left  += chime(t, 7.15, noteFreqs.C5, 1.2) * 0.28;
  right += chime(t, 7.30, noteFreqs.E5, 1.0) * 0.30;
  left  += chime(t, 7.45, noteFreqs.G5, 0.9) * 0.32;
  right += chime(t, 7.60, noteFreqs.C6, 0.8) * 0.38; // Majestic crowning gold note!

  // Master fade out at the end
  if (t > 9.4) {
    const fadeOut = Math.max(0, (10.0 - t) / 0.6);
    left *= fadeOut;
    right *= fadeOut;
  }

  // Soft master limiter
  left = Math.max(-0.95, Math.min(0.95, left));
  right = Math.max(-0.95, Math.min(0.95, right));

  buffer.writeInt16LE(Math.floor(left * 32767), offset);
  buffer.writeInt16LE(Math.floor(right * 32767), offset + 2);
  offset += 4;
}

fs.writeFileSync(audioWavPath, buffer);
console.log(`[Audio] Soundtrack generated: ${audioWavPath}`);

// Step 5: Multiplex Final Video and Audio
console.log('--- Step 5: Multiplexing Final Video Ad ---');
const finalMp4Path = path.join(videoDir, 'la_desio_intro_ad.mp4');

const muxArgs = [
  '-y',
  '-i', combinedVideoPath,
  '-i', audioWavPath,
  '-c:v', 'copy',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-shortest',
  '-movflags', '+faststart',
  finalMp4Path
];

runFFmpeg(muxArgs, 'Final Multiplexing (la_desio_intro_ad.mp4)');

console.log('====================================================');
console.log('🎉 SUCCESS! Ultra-Smooth AI Commercial Video Generated:');
console.log('File:', finalMp4Path);
console.log('Duration: ~10 seconds (7 Fast-Paced Dessert Cuts + Logo Finale)');
console.log('Size:', (fs.statSync(finalMp4Path).size / (1024 * 1024)).toFixed(2), 'MB');
console.log('====================================================');
