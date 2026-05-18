import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GlassWater,
  Heart,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";
import PageTransition from "../components/PageTransition";

const videos = [
  { src: "/videos/sax1.mp4" },
  { src: "/videos/sax2.mp4" },
  { src: "/videos/sax3.mp4" },
];

const atmospheres = [
  {
    title: "Coquetéis e recepções",
    text: "Uma trilha ao vivo elegante para receber convidados com leveza e sofisticação.",
    icon: <GlassWater size={18} />,
  },
  {
    title: "Celebrações especiais",
    text: "Música para ocasiões em que o ambiente precisa transmitir acolhimento, presença e bom gosto.",
    icon: <Heart size={18} />,
  },
  {
    title: "Encontros sociais sofisticados",
    text: "Uma proposta musical pensada para compor o evento sem excessos e com naturalidade.",
    icon: <Users size={18} />,
  },
];

const qualities = [
  "Atmosfera mais leve, elegante e agradável para os convidados.",
  "Presença musical que valoriza o ambiente sem pesar a experiência.",
  "Formato flexível para diferentes perfis de ocasião social.",
];

const flow = [
  {
    title: "Conversamos sobre o evento",
    text: "Entendimento do estilo da ocasião, perfil dos convidados e clima que se deseja criar.",
  },
  {
    title: "Definimos o formato ideal",
    text: "A proposta é ajustada de acordo com o ambiente, horário e dinâmica do encontro.",
  },
];

export default function EventosSociais() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para evento social.",
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-black text-brand-offwhite">
        <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pb-28 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,77,0.10),transparent_34%),radial-gradient(circle_at_left,rgba(122,31,43,0.10),transparent_28%)]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <span className="inline-flex rounded-full border border-brand-gold/24 bg-brand-gold/10 px-4 py-2 font-body text-xs uppercase tracking-[0.22em] text-brand-gold">
                  Eventos sociais
                </span>

                <h1 className="mt-6 max-w-4xl font-title text-4xl leading-tight text-brand-offwhite md:text-6xl">
                  Música ao vivo para ocasiões sociais com leveza, elegância e
                  atmosfera
                </h1>

                <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-brand-offwhite/74 md:text-xl">
                  Uma proposta pensada para coquetéis, recepções e celebrações
                  em que o ambiente também precisa ser lembrado pela experiência
                  que transmite.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/5511996983359?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 font-body text-sm font-semibold tracking-wide text-brand-black transition duration-300 hover:bg-accent-gold"
                  >
                    Solicitar orçamento
                  </a>

                  <a
                    href="#ambientes"
                    className="inline-flex items-center justify-center rounded-full border border-white/14 px-8 py-4 font-body text-sm font-medium tracking-wide text-brand-offwhite transition duration-300 hover:border-brand-gold/30 hover:text-brand-gold"
                  >
                    Ver detalhes
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
                className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]"
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-brand-graphite/14 shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
                  <video
                    src="/videos/sax2.mp4"
                    controls
                    className="h-[420px] w-full object-cover bg-black md:h-[540px]"
                  />
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      title: "Leveza",
                      text: "Uma presença musical agradável e natural.",
                      icon: <Music2 size={17} />,
                    },
                    {
                      title: "Atmosfera",
                      text: "Ambiente mais elegante, acolhedor e memorável.",
                      icon: <Sparkles size={17} />,
                    },
                    {
                      title: "Flexibilidade",
                      text: "Formato ajustado ao perfil de cada ocasião.",
                      icon: <GlassWater size={17} />,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
                    >
                      <div className="flex items-center gap-2 text-brand-gold">
                        {item.icon}
                        <span className="font-body text-[11px] uppercase tracking-[0.2em]">
                          {item.title}
                        </span>
                      </div>

                      <p className="mt-3 font-body text-sm leading-relaxed text-brand-offwhite/74">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
              Atmosfera
            </span>

            <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-5xl">
              Música ao vivo para ocasiões em que o ambiente também faz parte da
              lembrança do evento
            </h2>

            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-brand-offwhite/68">
              Em encontros sociais, a música precisa compor a experiência com
              elegância, leveza e presença, criando um clima agradável para os
              convidados sem excesso de informação visual ou sonora.
            </p>
          </div>
        </section>

        <section id="ambientes" className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
                Onde funciona melhor
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                Formatos sociais em que a música ao vivo ajuda a valorizar a
                experiência
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {atmospheres.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] border border-white/8 bg-brand-graphite/14 p-8 shadow-[0_12px_34px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-[2px] hover:border-brand-gold/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/18 bg-brand-gold/10 text-brand-gold">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 font-title text-2xl text-brand-offwhite">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-body leading-relaxed text-brand-offwhite/68">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div
              ref={sliderRef}
              className="keen-slider overflow-hidden rounded-[2rem] border border-white/8 bg-brand-graphite/12"
            >
              {videos.map((video, index) => (
                <div key={index} className="keen-slider__slide">
                  <video
                    src={video.src}
                    controls
                    className="h-[420px] w-full object-cover bg-black md:h-[560px]"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-brand-gold/12 bg-[linear-gradient(135deg,rgba(201,162,77,0.12),rgba(255,255,255,0.02),rgba(14,14,14,1))] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.16)] md:p-10">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
                O que essa proposta entrega
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                Uma presença musical que ajuda o evento a parecer mais bem
                cuidado
              </h2>

              <div className="mt-8 space-y-4">
                {qualities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-brand-black/20 px-5 py-4"
                  >
                    <p className="font-body text-sm leading-relaxed text-brand-offwhite/74 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
                  Como funciona
                </span>

                <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                  Um processo leve e objetivo, sem complicar o planejamento
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {flow.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] border border-white/8 bg-brand-graphite/14 p-8"
                  >
                    <span className="font-title text-3xl text-brand-gold/85">
                      0{index + 1}
                    </span>

                    <h3 className="mt-6 font-title text-2xl text-brand-offwhite">
                      {item.title}
                    </h3>

                    <p className="mt-4 font-body leading-relaxed text-brand-offwhite/68">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8 md:pb-28">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-brand-gold/18 bg-[linear-gradient(135deg,rgba(201,162,77,0.14),rgba(255,255,255,0.03),rgba(14,14,14,0.92))] px-8 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:px-14 md:py-16">
            <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
              Orçamento
            </span>

            <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-5xl">
              Se fizer sentido para a sua ocasião, será um prazer conversar
            </h2>

            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-brand-offwhite/68">
              Envie as informações principais do evento para avaliar o formato
              mais adequado ao ambiente e ao perfil dos convidados.
            </p>

            <a
              href={`https://wa.me/5511996983359?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-4 font-body text-sm font-semibold tracking-wide text-brand-black transition duration-300 hover:bg-accent-gold"
            >
              Falar no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
