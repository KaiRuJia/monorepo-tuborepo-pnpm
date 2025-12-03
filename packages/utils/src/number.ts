export function formatNumber(num: number, decimals: number = 2): string {
  console.log(`[debug] formatNumber called with num: ${num}, decimals: ${decimals}`);
  return num.toFixed(decimals);
}

export function clamp(num: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, num));
}

export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}