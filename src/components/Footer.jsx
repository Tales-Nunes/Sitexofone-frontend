import { Link, useLocation } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isWeddingPage = currentPath.startsWith("/eventos/casamento");

  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para evento.",
  );

  const navigationLinks = [
    { label: "Início", to: "/" },
    { label: "Casamentos", to: "/eventos/casamento" },
    { label: "Corporativo", to: "/eventos/corporativo" },
  ];

  const styles = isWeddingPage
    ? {
        footer: "border-t border-[#17322D]/8 bg-[#FAF9F6] text-[#17322D]",
        heading: "text-[#0B6B5C]",
        title: "text-[#17322D]",
        body: "text-[#17322D]/70",
        line: "border-[#17322D]/8",
        button: "bg-[#0B6B5C] text-[#FAF9F6] hover:opacity-92",
        navText: "text-[#17322D]/70 hover:text-[#17322D]",
        navLine: "bg-[#0B6B5C]",
        info: "text-[#17322D]/58",
      }
    : {
        footer: "border-t border-white/6 bg-brand-black text-brand-offwhite",
        heading: "text-brand-gold",
        title: "text-brand-offwhite",
        body: "text-brand-offwhite/72",
        line: "border-white/8",
        button: "bg-brand-gold text-brand-black hover:bg-accent-gold",
        navText: "text-brand-offwhite/70 hover:text-brand-offwhite",
        navLine: "bg-brand-gold",
        info: "text-brand-offwhite/56",
      };

  return (
    <footer className={styles.footer}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <span
              className={`font-body text-xs uppercase tracking-[0.24em] ${styles.heading}`}
            >
              TALESAX
            </span>

            <h2
              className={`mt-4 max-w-xl font-title text-3xl leading-tight md:text-4xl ${styles.title}`}
            >
              Saxofonista para eventos com classe, qualidade e profissionalismo
            </h2>

            <p
              className={`mt-5 max-w-xl font-body text-base leading-relaxed ${styles.body}`}
            >
              Atendimento para a região da capital de São Paulo, com foco em
              casamentos, eventos corporativos, recepções, coquetéis e ocasiões
              sofisticadas.
            </p>

            <a
              href={`https://wa.me/5511996983359?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-semibold transition duration-300 ${styles.button}`}
            >
              Solicitar orçamento
            </a>
          </div>

          <div>
            <h3
              className={`font-body text-sm font-semibold uppercase tracking-[0.22em] ${styles.heading}`}
            >
              Navegação
            </h3>

            <ul className="mt-6 space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`group inline-flex items-center font-body text-sm transition duration-300 ${styles.navText}`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`ml-0 h-px w-0 transition-all duration-300 group-hover:ml-3 group-hover:w-6 ${styles.navLine}`}
                    />
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="#contato"
                  className={`group inline-flex items-center font-body text-sm transition duration-300 ${styles.navText}`}
                >
                  <span>Contato</span>
                  <span
                    className={`ml-0 h-px w-0 transition-all duration-300 group-hover:ml-3 group-hover:w-6 ${styles.navLine}`}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className={`font-body text-sm font-semibold uppercase tracking-[0.22em] ${styles.heading}`}
            >
              Contato
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href={`https://wa.me/5511996983359?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className={`group flex items-start gap-3 font-body text-sm transition duration-300 ${styles.navText}`}
              >
                <Phone
                  className={`mt-0.5 h-4 w-4 shrink-0 ${styles.heading}`}
                />
                <span className="min-w-0 break-words">
                  +55 (11) 9 9698-3359
                </span>
              </a>

              <a
                href="mailto:talesnunes.siqueira@gmail.com"
                className={`group flex items-start gap-3 font-body text-sm transition duration-300 ${styles.navText}`}
              >
                <Mail className={`mt-0.5 h-4 w-4 shrink-0 ${styles.heading}`} />
                <span className="min-w-0 break-words">
                  talesnunes.siqueira@gmail.com
                </span>
              </a>

              <a
                href="https://instagram.com/talesax"
                target="_blank"
                rel="noreferrer"
                className={`group flex items-start gap-3 font-body text-sm transition duration-300 ${styles.navText}`}
              >
                <FaInstagram
                  className={`mt-0.5 h-4 w-4 shrink-0 ${styles.heading}`}
                />
                <span className="min-w-0 break-words">@talesax</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-14 border-t pt-6 ${styles.line}`}>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className={`font-body text-xs tracking-wide ${styles.info}`}>
              © {new Date().getFullYear()} Tales Nunes. Todos os direitos
              reservados.
            </p>

            <p className={`font-body text-xs tracking-wide ${styles.info}`}>
              Saxofonista para eventos sofisticados em São Paulo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
