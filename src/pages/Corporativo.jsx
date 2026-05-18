import PageTransition from "../components/PageTransition";
import ContactSection from "../components/ContactSection";
import {
  ArrowRight,
  Building2,
  CalendarRange,
  CheckCircle2,
  Handshake,
} from "lucide-react";

const useCases = [
  {
    title: "Recepções corporativas",
    text: "Uma presença musical elegante para receber convidados, clientes e parceiros com mais sofisticação desde a chegada.",
    icon: <Handshake size={18} />,
  },
  {
    title: "Eventos institucionais",
    text: "Música ao vivo para ocasiões em que imagem, ambiente e percepção ajudam a reforçar o posicionamento da empresa.",
    icon: <Building2 size={18} />,
  },
  {
    title: "Confraternizações e encontros",
    text: "Uma proposta adequada para eventos internos e encontros profissionais em que organização, leveza e bom gosto precisam caminhar juntos.",
    icon: <CalendarRange size={18} />,
  },
];

const differentials = [
  "Apresentação compatível com ambientes corporativos e ocasiões institucionais.",
  "Leitura do momento do evento para manter a música no tom adequado.",
  "Entrega discreta, elegante e alinhada à imagem que a empresa deseja transmitir.",
];

const steps = [
  {
    number: "01",
    title: "Entendimento do contexto",
    text: "Alinhamento sobre perfil do evento, público presente, objetivo da ocasião e papel da música na experiência.",
  },
  {
    number: "02",
    title: "Definição da proposta",
    text: "Avaliação do formato musical mais adequado ao ambiente, ao horário e ao padrão de entrega esperado.",
  },
  {
    number: "03",
    title: "Execução com organização",
    text: "Pontualidade, postura profissional e condução alinhadas à dinâmica do evento e à expectativa da empresa.",
  },
];

export default function Corporativo() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para evento corporativo.",
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-black text-brand-offwhite">
        {/* INTRO */}
        <section className="relative flex min-h-[87svh] items-center px-6 pt-24 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#5D7285]/22 bg-[#5D7285]/10 px-4 py-2 font-body text-xs uppercase tracking-[0.22em] text-[#B8C8D4]">
              Corporativo
            </span>

            <h1 className="mt-6 font-title text-3xl leading-tight text-brand-offwhite md:text-6xl">
              Música ao vivo para eventos corporativos com presença, imagem e
              sofisticação
            </h1>

            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-brand-offwhite/72">
              Uma proposta musical pensada para recepções, encontros e eventos
              institucionais em que o ambiente também comunica valor e
              profissionalismo.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-offwhite/58">
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

        {/* PROPOSTA */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.1rem] border border-white/8 bg-brand-graphite/12 shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
              <img
                src="/img/sobre.jpeg"
                alt="Apresentação musical em ambiente corporativo"
                className="h-[420px] w-full object-cover md:h-[540px]"
              />
            </div>

            <div>
              <span className="font-body text-xs uppercase tracking-[0.24em] text-[#B8C8D4]">
                Proposta
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                Uma presença musical que reforça o ambiente sem competir com a
                dinâmica da ocasião
              </h2>

              <div className="mt-6 grid gap-5">
                <p className="font-body text-base leading-relaxed text-brand-offwhite/70 md:text-lg">
                  Em eventos corporativos, a música precisa compor a experiência
                  com elegância e naturalidade, ajudando a qualificar o ambiente
                  sem interferir na circulação, nas conversas e no objetivo do
                  encontro.
                </p>

                <p className="font-body text-base leading-relaxed text-brand-offwhite/70 md:text-lg">
                  O foco está em criar uma atmosfera refinada, coerente com o
                  perfil do evento, do público e da imagem que a empresa deseja
                  transmitir aos convidados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APLICAÇÕES */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 max-w-3xl">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-[#B8C8D4]">
                Aplicações
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                Contextos em que essa proposta funciona especialmente bem
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.9rem] border border-white/8 bg-brand-graphite/14 p-8 shadow-[0_12px_34px_rgba(0,0,0,0.10)] md:p-9"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5D7285]/22 bg-[#5D7285]/10 text-[#B8C8D4]">
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

        {/* DIFERENCIAIS */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="rounded-[2.2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(93,114,133,0.14),rgba(255,255,255,0.02),rgba(14,14,14,1))] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:p-10">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-[#B8C8D4]">
                Diferenciais
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                Uma entrega pensada para somar valor ao evento com discrição,
                segurança e profissionalismo
              </h2>

              <div className="mt-8 space-y-4">
                {differentials.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-brand-black/20 px-5 py-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-gold"
                    />
                    <p className="font-body text-sm leading-relaxed text-brand-offwhite/74 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-white/8 bg-brand-graphite/12 shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
              <video
                src="/videos/corp1.mp4"
                controls
                className="h-[420px] w-full object-cover bg-black md:h-[560px]"
              />
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="px-6 py-28 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <span className="font-body text-xs uppercase tracking-[0.24em] text-[#B8C8D4]">
                Como funciona
              </span>

              <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
                Um processo objetivo, profissional e bem conduzido
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((item) => (
                <div
                  key={item.number}
                  className="rounded-[1.9rem] border border-white/8 bg-brand-graphite/14 p-8 shadow-[0_12px_34px_rgba(0,0,0,0.10)] md:p-9"
                >
                  <span className="font-title text-3xl text-brand-gold/85">
                    {item.number}
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
        </section>

        {/* CTA */}
        <section className="px-6 pb-24 pt-12 md:pb-28 md:pt-14">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(93,114,133,0.16),rgba(255,255,255,0.03),rgba(14,14,14,0.92))] px-8 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:px-14 md:py-18">
            <span className="font-body text-xs uppercase tracking-[0.24em] text-[#B8C8D4]">
              Orçamento
            </span>

            <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-5xl">
              Se a proposta fizer sentido para o seu evento, será um prazer
              conversar
            </h2>

            <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-brand-offwhite/70">
              Envie as informações principais para avaliar o formato musical
              mais adequado ao ambiente, ao público e à experiência que a
              empresa deseja oferecer.
            </p>

            <a
              href="#contato"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-4 font-body text-sm font-semibold tracking-wide text-brand-black transition duration-300 hover:bg-accent-gold"
            >
              Ir para contato
            </a>
          </div>
        </section>

        <ContactSection />
      </div>
    </PageTransition>
  );
}
