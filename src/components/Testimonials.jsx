import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    text: "A apresentação trouxe exatamente a elegância que imaginávamos para o evento. Foi um detalhe que fez toda a diferença na atmosfera da noite.",
    author: "Camila & Veber — Casamento",
  },
  {
    text: "Além da qualidade musical, o cuidado com o ambiente e a postura profissional deixaram tudo ainda mais especial.",
    author: "Rapha & Thiago — Evento Social",
  },
  {
    text: "Foi uma presença musical muito bem escolhida para a ocasião. Os convidados elogiaram bastante a experiência ao longo do evento.",
    author: "Dafny & Danilo — Casamento",
  },
];

export default function Testimonials() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        const clearNextTimeout = () => clearTimeout(timeout);

        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => slider.next(), 4500);
        };

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });

          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });

          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-4 py-24"
      style={{ backgroundImage: "url('/images/bg-depoimentos.jpg')" }}
    >
      <div className="absolute inset-0 bg-brand-black/82 backdrop-blur-md" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="font-body text-sm uppercase tracking-[0.24em] text-brand-gold">
          Depoimentos
        </span>

        <h3 className="mt-3 mb-12 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
          O que dizem sobre o trabalho
        </h3>

        <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] px-6 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:px-10 md:py-12">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center px-2 md:px-6"
              >
                <span className="mb-5 font-title text-5xl leading-none text-brand-gold/24 md:text-6xl">
                  “
                </span>

                <p className="max-w-3xl font-body text-lg italic leading-relaxed text-brand-offwhite/90 md:text-xl">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-14 bg-brand-gold/25" />

                <span className="mt-6 font-body text-sm font-semibold tracking-[0.08em] text-brand-gold md:text-base">
                  {item.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
