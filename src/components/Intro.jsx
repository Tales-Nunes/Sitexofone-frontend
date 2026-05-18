import VideoSlider from "./VideoSlider.jsx";

function Intro() {
  const videos = [
    { src: "/videos/sax1.mp4" },
    { src: "/videos/sax2.mp4" },
    { src: "/videos/sax3.mp4" },
    { src: "/videos/sax4.mp4" },
  ];

  return (
    <section className="px-6 py-20 md:py-24 bg-brand-black">
      <div className="mx-auto max-w-6xl">
        {/* TOPO */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
            Apresentação musical
          </span>

          <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-5xl">
            Música pensada para participar do evento com sensibilidade, presença
            e elegância
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-brand-offwhite/74 md:text-xl">
            Cada apresentação é construída conforme o tipo de evento, o
            ambiente, o público e a atmosfera desejada. A proposta pode
            transitar entre momentos mais intimistas, recepções elegantes e
            experiências mais dinâmicas, sempre buscando coerência com a
            ocasião.
          </p>
        </div>

        {/* DESTAQUES */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Repertório versátil",
              text: "Uma proposta musical que pode dialogar com cerimônias, recepções, eventos corporativos, festas e apresentações especiais.",
            },
            {
              title: "Leitura de ambiente",
              text: "A forma de tocar, conduzir e ocupar o espaço considera o contexto do evento e a experiência desejada para os convidados.",
            },
            {
              title: "Entrega personalizada",
              text: "Cada evento pede um tipo de presença musical. Por isso, o formato é pensado de maneira compatível com a ocasião.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/8 bg-brand-graphite/22 p-7"
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

        {/* SLIDER DE VÍDEOS */}
        <div className="mt-16">
          <div className="mb-8 text-center">
            <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
              Vídeos
            </span>

            <h3 className="mt-3 font-title text-2xl text-brand-offwhite md:text-4xl">
              Registros de apresentações
            </h3>
          </div>

          <VideoSlider videos={videos} />
        </div>
      </div>
    </section>
  );
}

export default Intro;
