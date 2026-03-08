// Soft interaction sound utilities
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    return audioCtx;
  } catch {
    return null;
  }
}

export function playHoverSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.setValueAtTime(600, ctx.currentTime);
  osc.type = "sine";
  gain.gain.setValueAtTime(0.015, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.06);
}

export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Professional crisp UI tap — short noise burst filtered to a tight band
  const bufferSize = ctx.sampleRate * 0.03; // 30ms
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 8);
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.setValueAtTime(3200, ctx.currentTime);
  bandpass.Q.setValueAtTime(2, ctx.currentTime);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);

  source.connect(bandpass);
  bandpass.connect(gain);
  gain.connect(ctx.destination);
  source.start(ctx.currentTime);
}

export function playSplashSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Warm rising chime — three gentle tones
  const notes = [440, 554, 659]; // A4, C#5, E5 — A major chord ascending
  const startGain = 0.04;

  notes.forEach((freq, i) => {
    const delay = i * 0.18;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, ctx.currentTime + delay);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
    osc.type = "sine";
    gain.gain.setValueAtTime(0, ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(startGain - i * 0.008, ctx.currentTime + delay + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.6);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + 0.6);
  });

  // Soft shimmer pad underneath
  const pad = ctx.createOscillator();
  const padGain = ctx.createGain();
  const padFilter = ctx.createBiquadFilter();
  padFilter.type = "lowpass";
  padFilter.frequency.setValueAtTime(600, ctx.currentTime);
  pad.connect(padFilter);
  padFilter.connect(padGain);
  padGain.connect(ctx.destination);
  pad.frequency.setValueAtTime(220, ctx.currentTime);
  pad.type = "triangle";
  padGain.gain.setValueAtTime(0, ctx.currentTime);
  padGain.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.2);
  padGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
  pad.start(ctx.currentTime);
  pad.stop(ctx.currentTime + 1.2);
}
