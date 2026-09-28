// Responsive portrait: WebP with JPEG fallback, explicit size to avoid layout shift,
// high fetch priority because it is the largest element above the fold.
export default function Portrait({ name, caption }) {
  return (
    <figure className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-[420px]">
      {/* Drawing-style corner ticks */}
      <span aria-hidden="true" className="absolute -left-3 -top-3 size-6 border-l-2 border-t-2 border-accent" />
      <span aria-hidden="true" className="absolute -bottom-3 -right-3 size-6 border-b-2 border-r-2 border-accent" />

      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <picture>
          <source
            type="image/webp"
            srcSet="/images/abraham-akinniyi-480.webp 480w, /images/abraham-akinniyi-640.webp 640w, /images/abraham-akinniyi-960.webp 960w"
            sizes="(min-width: 1024px) 420px, 280px"
          />
          <img
            src="/images/abraham-akinniyi-480.jpg"
            srcSet="/images/abraham-akinniyi-480.jpg 480w, /images/abraham-akinniyi-640.jpg 640w, /images/abraham-akinniyi-960.jpg 960w"
            sizes="(min-width: 1024px) 420px, 280px"
            width="480"
            height="480"
            alt={`Portrait of ${name}`}
            fetchPriority="high"
            decoding="async"
            className="aspect-square w-full object-cover"
          />
        </picture>
      </div>

      {caption && (
        <figcaption className="mt-4 flex items-start gap-3 rounded-xl border border-line bg-bg px-4 py-3 text-sm">
          <span aria-hidden="true" className="relative mt-1.5 flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          <span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">Currently</span>
            <span className="font-semibold text-fg">{caption}</span>
          </span>
        </figcaption>
      )}
    </figure>
  );
}
