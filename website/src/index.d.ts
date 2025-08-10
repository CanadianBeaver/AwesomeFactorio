declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
declare module '*.svg';

export {};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}
