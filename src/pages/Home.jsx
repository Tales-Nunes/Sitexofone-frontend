import { useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import EventTypes from "../components/EventTypes";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import VideoSlider from "../components/VideoSlider";

const videos = [
  { src: "/videos/sax1.mp4" },
  { src: "/videos/sax2.mp4" },
  { src: "/videos/sax3.mp4" },
  { src: "/videos/sax4.mp4" },
  { src: "/videos/sax5.mp4" },
  { src: "/videos/sax6.mp4" },
  { src: "/videos/sax7.mp4" },
];

const highlights = [
  {
    title: "Experiência",
    value: "15 anos",
  },
  {
    title: "Formação",
    value: "Saxofone",
  },
  {
    title: "Atuação",
    value: "Premium",
  },
];

export default function Home() {
  const heroRef = useRef(null);

  return (
    <PageTransition>
      <div className="bg-brand-black text-brand-offwhite">
        <section className="relative overflow-hidden">
          <Hero heroRef={heroRef} />
          <Sobre heroRef={heroRef} />
        </section>

        <section className="px-6 pb-18">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
                  Registros
                </span>

                <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                  Alguns momentos reais
                </h2>
              </div>

              <p className="max-w-2xl font-body text-base leading-relaxed text-brand-offwhite/70 md:text-lg">
                Vídeos de apresentações em eventos, recepções e ocasiões em que
                a música ao vivo ajuda a criar um ambiente mais elegante e
                acolhedor.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-brand-graphite/14 p-4 md:p-6">
              <VideoSlider videos={videos} />
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-14">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-brand-graphite/14">
              <img
                src="/img/proposta.JPG"
                alt="Tales Nunes em apresentação"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-white/8 bg-brand-graphite/12 p-8 md:p-10">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
                Proposta
              </span>

              <h2 className="mt-4 max-w-lg font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                Saxofonista para eventos sofisticados
              </h2>

              <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-brand-offwhite/72 md:text-lg">
                Uma apresentação pensada para eventos em que classe, qualidade e
                profissionalismo também precisam estar presentes na experiência
                musical.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/8 bg-brand-black/24">
                <div className="grid divide-y divide-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="px-6 py-6 text-center sm:text-left"
                    >
                      <span className="block font-body text-[11px] uppercase tracking-[0.22em] text-brand-offwhite/46">
                        {item.title}
                      </span>

                      <span className="mt-3 block font-title text-[20px] leading-tight text-brand-gold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <EventTypes />
        </section>

        <section className="py-6 md:py-8">
          <Testimonials />
        </section>

        <section className="px-6 py-8 md:py-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-brand-gold/18 bg-[linear-gradient(135deg,rgba(201,162,77,0.14),rgba(184,150,75,0.06),rgba(14,14,14,0.92))] px-8 py-12 text-center md:px-14 md:py-16">
            <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-5xl">
              Se fizer sentido para o seu evento, será um prazer conversar
            </h2>

            <a
              href="#contato"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 font-body text-sm font-semibold tracking-wide text-brand-black transition duration-300 hover:bg-accent-gold"
            >
              Contato
            </a>
          </div>
        </section>

        <ContactSection />
      </div>
    </PageTransition>
  );
}
