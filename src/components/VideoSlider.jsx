import { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import "keen-slider/keen-slider.min.css";

function ThumbnailPlugin(mainRef, setCurrentSlide) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }

    function addActive(idx) {
      slider.slides[idx]?.classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) {
            mainRef.current.moveToIdx(idx);
          }
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;

      addActive(slider.track.details.rel);
      addClickEvents();

      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
        setCurrentSlide(main.track.absToRel(next));
      });

      mainRef.current.on("slideChanged", (main) => {
        setCurrentSlide(main.track.details.rel);
      });
    });
  };
}

export default function VideoSlider({ videos }) {
  const videoRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      const activeIndex = slider.track.details.rel;
      setCurrentSlide(activeIndex);
      handleAutoplay(activeIndex);
    },
    created(slider) {
      const activeIndex = slider.track.details.rel;
      setCurrentSlide(activeIndex);
      handleAutoplay(activeIndex);
    },
    loop: true,
  });

  const [thumbnailRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 12,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: {
            perView: 4,
            spacing: 12,
          },
        },
      },
    },
    [ThumbnailPlugin(instanceRef, setCurrentSlide)],
  );

  function handleAutoplay(activeIndex) {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  function handleVideoEnd(index) {
    if (!instanceRef.current) return;

    const slider = instanceRef.current;
    const maxIdx = slider.track.details.maxIdx;
    const nextIndex = index === maxIdx ? 0 : index + 1;

    slider.moveToIdx(nextIndex);
  }

  function goPrev() {
    instanceRef.current?.prev();
  }

  function goNext() {
    instanceRef.current?.next();
  }

  return (
    <div className="mx-auto max-w-6xl">
      {/* SLIDER PRINCIPAL */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="keen-slider overflow-hidden rounded-[1.75rem] border border-white/8 bg-black"
        >
          {videos.map((video, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="relative">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.src}
                  playsInline
                  preload="metadata"
                  className="h-[420px] w-full bg-black object-cover md:h-[560px]"
                  controls
                  onEnded={() => handleVideoEnd(index)}
                />

                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/6" />
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLES */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-between px-4 md:flex">
          <button
            type="button"
            onClick={goPrev}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-brand-black/70 text-brand-offwhite backdrop-blur-md transition duration-300 hover:border-brand-gold/30 hover:text-brand-gold"
            aria-label="Vídeo anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-brand-black/70 text-brand-offwhite backdrop-blur-md transition duration-300 hover:border-brand-gold/30 hover:text-brand-gold"
            aria-label="Próximo vídeo"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="font-body text-xs uppercase tracking-[0.22em] text-brand-offwhite/42">
          Vídeo {currentSlide + 1} de {videos.length}
        </div>

        <div className="flex items-center gap-2">
          {videos.map((_, index) => (
            <span
              key={index}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-brand-gold"
                  : "w-4 bg-white/16"
              }`}
            />
          ))}
        </div>
      </div>

      {/* THUMBNAILS */}
      <div ref={thumbnailRef} className="keen-slider mt-6">
        {videos.map((video, index) => (
          <div key={index} className="keen-slider__slide">
            <button
              type="button"
              className={`group relative block w-full overflow-hidden rounded-[1.15rem] border transition duration-300 ${
                currentSlide === index
                  ? "border-brand-gold/50"
                  : "border-white/8 hover:border-brand-gold/20"
              }`}
              aria-label={`Abrir vídeo ${index + 1}`}
            >
              <video
                src={video.src}
                muted
                preload="metadata"
                className="h-24 w-full bg-black object-cover md:h-28"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/55 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition duration-300 ${
                    currentSlide === index
                      ? "border-brand-gold/40 bg-brand-black/55 text-brand-gold"
                      : "border-white/12 bg-brand-black/45 text-brand-offwhite/82"
                  }`}
                >
                  <Play size={14} className="ml-[1px]" />
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-3 left-3">
                <span
                  className={`font-body text-[11px] uppercase tracking-[0.2em] transition duration-300 ${
                    currentSlide === index
                      ? "text-brand-gold"
                      : "text-brand-offwhite/62"
                  }`}
                >
                  Vídeo {index + 1}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
