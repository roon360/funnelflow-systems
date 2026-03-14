'use client';

/**
 * Use this component for images so they lazy-load and don't block initial render.
 * Native img with loading="lazy" and decoding="async" for best performance.
 */
export function LazyImage(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return <img loading="lazy" decoding="async" {...props} />;
}
