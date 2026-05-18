import { motion, useScroll, useTransform } from "framer-motion";

function Sobre() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -120], {
    clamp: true,
  });

  return (
    <motion.section
      style={{ y }}
      className="relative z-10 bg-brand-black pt-32"
    >
      <div className="relative z-10 -mt-32 px-6 pb-0 pt-3">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/img/sobre.jpeg"
              alt="Tales Nunes Saxofonista"
              className="w-[320px] rounded-3xl shadow-2xl ring-1 ring-brand-gold/20 md:w-[420px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 font-body text-sm font-medium uppercase tracking-widest text-brand-gold">
              Sobre
            </h3>

            <h2 className="mb-6 font-title text-4xl leading-tight text-brand-offwhite md:text-5xl">
              Música ao vivo com qualidade, sensibilidade e cuidado com a
              experiência do evento
            </h2>

            <p className="mb-4 font-body leading-relaxed text-brand-offwhite/80">
              Sou saxofonista com formação na área e atuação em eventos ao vivo
              há mais de 15 anos, sempre com atenção à qualidade musical, à
              leitura do ambiente e à postura profissional.
            </p>

            <p className="mb-4 font-body leading-relaxed text-brand-offwhite/80">
              Ao longo desse percurso, participei de apresentações em diferentes
              contextos, desenvolvendo um trabalho voltado a ocasiões em que a
              música precisa somar elegância, presença e bom gosto, sem
              excessos.
            </p>

            <p className="font-body leading-relaxed text-brand-offwhite/80">
              Hoje, meu foco está principalmente em casamentos, eventos
              corporativos, coquetéis, recepções e celebrações sofisticadas, com
              propostas pensadas para valorizar a atmosfera de cada evento.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Sobre;
