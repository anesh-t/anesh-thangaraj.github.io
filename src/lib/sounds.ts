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
  // Gentle soft "pop" — single muted tone
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(400, ctx.currentTime);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.setValueAtTime(520, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.08);
  osc.type = "sine";
  gain.gain.setValueAtTime(0.025, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.08);
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
