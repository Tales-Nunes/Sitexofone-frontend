import { Link } from "react-router-dom";
import { BriefcaseBusiness, GlassWater, HeartHandshake } from "lucide-react";

function EventTypes() {
  const events = [
    {
      title: "Casamentos",
      description:
        "Apresentações pensadas para cerimônia, recepção e momentos especiais em que sensibilidade, elegância e presença fazem diferença.",
      icon: <HeartHandshake size={22} />,
      route: "/eventos/casamento",
      tag: "Cerimônia & recepção",
    },
    {
      title: "Corporativo",
      description:
        "Uma proposta musical adequada para recepções, encontros com clientes, confraternizações e eventos institucionais de alto padrão.",
      icon: <BriefcaseBusiness size={22} />,
      route: "/eventos/corporativo",
      tag: "Institucional premium",
    },
    {
      title: "Coquetéis & Recepções",
      description:
        "Música ao vivo para ocasiões sociais sofisticadas em que o ambiente pede leveza, acolhimento e bom gosto.",
      icon: <GlassWater size={22} />,
      route: "/#contato",
      tag: "Ocasiões sociais",
    },
  ];

  return (
    <section className="px-6 py-24 text-brand-offwhite md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <span className="font-body text-xs uppercase tracking-[0.24em] text-brand-gold">
              Eventos
            </span>

            <h2 className="mt-4 font-title text-3xl leading-tight text-brand-offwhite md:text-4xl">
              Formatos pensados para diferentes tipos de ocasião
            </h2>
          </div>

          <p className="max-w-2xl font-body text-base leading-relaxed text-brand-offwhite/70 md:text-lg">
            Cada proposta é ajustada ao perfil do evento, ao ambiente e à
            experiência que se deseja construir com a música ao vivo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => {
            const isInternalPage = event.route.startsWith("/eventos/");

            const cardClassName =
              "group relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-brand-graphite/16 p-7 transition duration-300 hover:-translate-y-[3px] hover:border-brand-gold/25 hover:bg-brand-graphite/22 md:p-8";

            const content = (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.10),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-13 w-13 items-center justify-center rounded-full border border-brand-gold/18 bg-brand-gold/10 text-brand-gold transition duration-300 group-hover:border-brand-gold/28 group-hover:bg-brand-gold/14">
                      {event.icon}
                    </div>

                    <span className="rounded-full border border-white/8 bg-brand-black/26 px-3 py-1 font-body text-[10px] uppercase tracking-[0.18em] text-brand-offwhite/52 md:text-[11px]">
                      {event.tag}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-title text-2xl text-brand-offwhite md:text-[28px]">
                      {event.title}
                    </h3>

                    <p className="mt-4 max-w-md font-body text-base leading-relaxed text-brand-offwhite/68">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3 font-body text-sm font-medium text-brand-gold">
                    <span>
                      {isInternalPage ? "Ver página" : "Falar sobre o evento"}
                    </span>
                    <span className="transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </>
            );

            if (isInternalPage) {
              return (
                <Link
                  key={event.title}
                  to={event.route}
                  className={cardClassName}
                >
                  {content}
                </Link>
              );
            }

            return (
              <a key={event.title} href={event.route} className={cardClassName}>
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EventTypes;
