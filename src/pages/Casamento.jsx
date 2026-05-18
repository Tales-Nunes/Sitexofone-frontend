import PageTransition from "../components/PageTransition";
import VideoSlider from "../components/VideoSlider";
import ContactSection from "../components/ContactSection";

const videos = [
  { src: "/videos/sax1.mp4" },
  { src: "/videos/sax2.mp4" },
  { src: "/videos/sax3.mp4" },
];

const moments = [
  {
    title: "Cerimônia",
    text: "Entrada, alianças e momentos especiais com uma presença musical delicada e elegante.",
  },
  {
    title: "Recepção",
    text: "Um clima acolhedor para receber convidados com leveza, sofisticação e bom gosto.",
  },
  {
    title: "Festa",
    text: "Participação em momentos mais dinâmicos, mantendo a identidade elegante do evento.",
  },
];

const highlights = [
  {
    title: "Repertório",
    value: "Personalizado",
  },
  {
    title: "Presença",
    value: "Elegante",
  },
  {
    title: "Entrega",
    value: "Profissional",
  },
];

const steps = [
  {
    title: "Briefing",
    text: "Entendimento do estilo do casal, local e momentos da apresentação.",
  },
  {
    title: "Proposta",
    text: "Definição do formato ideal para a cerimônia, recepção ou festa.",
  },
  {
    title: "Execução",
    text: "Pontualidade, organização e condução cuidadosa no dia do evento.",
  },
];

export default function Casamento() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para casamento.",
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#FAF9F6] text-[#17322D]">
        {/* INTRO */}
        <section className="relative flex min-h-[86svh] items-center px-6 pt-24 md:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-body text-xs uppercase tracking-[0.24em] text-[#0B6B5C]">
              Casamentos
            </span>

            <h1 className="mt-4 font-title text-3xl leading-tight text-[#17322D] md:text-5xl">
              Música ao vivo para tornar o casamento mais marcante e acolhedor
            </h1>

            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-[#17322D]/68">
              O saxofone se encaixa com naturalidade em cerimônias, recepções e
              momentos especiais, ajudando a criar uma atmosfera elegante sem
              excessos.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#0B6B5C]/62">
            <div className="flex flex-col items-center gap-2">
              <span className="font-body text-[11px] uppercase tracking-[0.28em]">
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
        </section>

        {/* MOMENTOS */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-3xl">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-[#0B6B5C]">
                Momentos
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-[#17322D] md:text-4xl">
                Onde essa proposta funciona melhor no casamento
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {moments.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.9rem] border border-[#17322D]/8 bg-white p-8 shadow-[0_14px_36px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-[2px] hover:border-[#0B6B5C]/20 md:p-9"
                >
                  <h3 className="mb-4 font-title text-2xl text-[#0B6B5C]">
                    {item.title}
                  </h3>

                  <p className="font-body leading-relaxed text-[#17322D]/68">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VÍDEOS */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.24em] text-[#0B6B5C]">
                  Registros
                </span>

                <h2 className="mt-4 font-title text-3xl leading-tight text-[#17322D] md:text-4xl">
                  Alguns momentos reais
                </h2>
              </div>

              <p className="max-w-2xl font-body text-base leading-relaxed text-[#17322D]/68 md:text-lg">
                Vídeos de apresentações em cerimônias, recepções e celebrações
                em que a música ao vivo ajuda a tornar o casamento ainda mais
                especial.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#17322D]/8 bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:p-6">
              <VideoSlider videos={videos} />
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.2rem] bg-[#0B6B5C] px-8 py-14 text-[#FAF9F6] shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:px-12 md:py-16">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/76">
                  Diferenciais
                </span>

                <h2 className="mt-4 font-title text-3xl leading-tight md:text-4xl">
                  Música, sensibilidade e organização no mesmo cuidado de
                  entrega
                </h2>

                <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-[#FAF9F6]/84 md:text-lg">
                  Além da apresentação musical, o cuidado com atendimento,
                  repertório e condução do evento faz diferença para o casal
                  viver o dia com mais tranquilidade.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] border border-white/14 bg-white/6">
                <div className="grid divide-y divide-white/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="px-6 py-7 text-center sm:text-left"
                    >
                      <span className="block font-body text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/54">
                        {item.title}
                      </span>

                      <span className="mt-3 block font-title text-[18px] leading-tight text-[#D9BC7A]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-[#0B6B5C]">
                Como funciona
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-[#17322D] md:text-4xl">
                Um processo simples e bem organizado
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[1.9rem] border border-[#17322D]/8 bg-white p-8 shadow-[0_14px_36px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-[2px] hover:border-[#0B6B5C]/20 md:p-9"
                >
                  <h3 className="mb-4 font-title text-2xl text-[#0B6B5C]">
                    {step.title}
                  </h3>

                  <p className="font-body leading-relaxed text-[#17322D]/68">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-24 pt-10 md:pb-28 md:pt-12">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-[#0B6B5C]/12 bg-[linear-gradient(135deg,rgba(11,107,92,0.10),rgba(217,188,122,0.10),rgba(250,249,246,1))] px-8 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:px-14 md:py-18">
            <span className="font-body text-xs uppercase tracking-[0.24em] text-[#0B6B5C]">
              Orçamento
            </span>

            <h2 className="mt-4 font-title text-3xl leading-tight text-[#17322D] md:text-5xl">
              Se fizer sentido para o seu casamento, será um prazer conversar
            </h2>

            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-[#17322D]/68">
              Envie as informações principais do evento para avaliar o formato
              de apresentação mais adequado ao seu dia.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/5511996983359?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#0B6B5C] px-8 py-4 font-body text-sm font-semibold tracking-wide text-[#FAF9F6] transition duration-300 hover:opacity-92"
              >
                Falar no WhatsApp
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-[#0B6B5C]/20 px-8 py-4 font-body text-sm font-medium tracking-wide text-[#17322D] transition duration-300 hover:border-[#0B6B5C] hover:text-[#0B6B5C]"
              >
                Ir para contato
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </PageTransition>
  );
}
