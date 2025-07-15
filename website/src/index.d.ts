declare module '*.png';
declare module '*.jpg';

export {};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}
