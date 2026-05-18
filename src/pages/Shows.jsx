import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const formats = [
  {
    title: "Show solo",
    text: "Sax solo para eventos e apresentações especiais.",
  },
  {
    title: "Sax com DJ",
    text: "Mais movimento e interação para ambientes dinâmicos.",
  },
  {
    title: "Formações com banda",
    text: "Uma proposta mais ampla para palco e shows ao vivo.",
  },
];

export default function Shows() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para show ou apresentação.",
  );

  return (
    <PageTransition>
      <div className="bg-brand-black text-brand-offwhite">
        <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,77,0.14),transparent_45%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-black" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="mb-6 inline-flex rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-2 font-body text-xs uppercase tracking-[0.22em] text-brand-gold">
                Shows e apresentações
              </span>

              <h1 className="max-w-4xl font-title text-4xl leading-tight text-brand-offwhite md:text-6xl">
                Apresentações ao vivo com presença e identidade musical
              </h1>

              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-brand-offwhite/78 md:text-xl">
                Formatos pensados para shows, jazz, eventos e apresentações
                especiais.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/5511996983359?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 font-body text-sm font-semibold tracking-wide text-brand-black transition duration-300 hover:bg-accent-gold"
                >
                  Solicitar proposta
                </a>

                <a
                  href="#formatos"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold/30 px-8 py-4 font-body text-sm font-medium tracking-wide text-brand-offwhite transition duration-300 hover:border-brand-gold hover:text-brand-gold"
                >
                  Ver formatos
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-gold/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-graphite/40 shadow-2xl">
                <img
                  src="/img/hero.jpg"
                  alt="Tales Nunes em apresentação ao vivo"
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="formatos" className="px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {formats.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/8 bg-brand-graphite/22 p-8"
              >
                <h3 className="mb-4 font-title text-2xl text-brand-gold">
                  {item.title}
                </h3>
                <p className="font-body leading-relaxed text-brand-offwhite/74">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
