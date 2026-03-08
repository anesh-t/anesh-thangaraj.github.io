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
  osc.frequency.setValueAtTime(1200, ctx.currentTime);
  osc.type = "sine";
  gain.gain.setValueAtTime(0.03, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.08);
}

export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.type = "sine";
  gain.gain.setValueAtTime(0.05, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.12);

  // Second harmonic for a pleasant "tap"
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.frequency.setValueAtTime(1600, ctx.currentTime);
  osc2.type = "sine";
  gain2.gain.setValueAtTime(0.025, ctx.currentTime);
  gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
  osc2.start(ctx.currentTime);
  osc2.stop(ctx.currentTime + 0.1);
}
