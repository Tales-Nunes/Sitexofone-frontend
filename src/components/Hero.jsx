import { ParallaxBanner } from "react-scroll-parallax";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-brand-black"
    >
      <ParallaxBanner
        className="h-full w-full"
        layers={[
          {
            image: "/img/ahero.jpg",
            speed: -10,
            scale: [1.15, 1],
            className: "object-cover",
          },
        ]}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-brand-black/52 to-brand-black/92" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,77,0.16),transparent_34%)]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-5xl font-title text-5xl leading-tight tracking-[0.08em] text-brand-gold md:text-7xl">
            Saxofonista para eventos
          </h1>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#intro"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 font-body text-sm font-semibold tracking-wide text-brand-black transition duration-300 hover:bg-accent-gold"
            >
              Saiba mais
            </a>
          </div>

          <div className="mt-8 font-body text-sm text-brand-offwhite/62">
            A elegância que o seu evento precisa
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-brand-offwhite/72">
          <div className="flex flex-col items-center gap-2">
            <span
              id="intro"
              className="font-body text-[11px] uppercase tracking-[0.28em]"
            >
              Scroll
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-6 w-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
      </ParallaxBanner>
    </section>
  );
}

export default Hero;
