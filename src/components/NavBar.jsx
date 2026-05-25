import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GiSaxophone } from "react-icons/gi";

export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isWeddingPage = useMemo(
    () => currentPath.startsWith("/eventos/casamento"),
    [currentPath],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath === path || currentPath.startsWith(path);
  };

  const navLinks = [
    { label: "Início", path: "/" },
    { label: "Casamentos", path: "/eventos/casamento" },
    { label: "Corporativo", path: "/eventos/corporativo" },
  ];

  const contactHref =
    currentPath === "/" ||
    currentPath.startsWith("/eventos/casamento") ||
    currentPath.startsWith("/eventos/corporativo")
      ? "#contato"
      : "/#contato";

  const styles = isWeddingPage
    ? {
        header: isScrolled
          ? "border-b border-[#17322D]/8 bg-[#FAF9F6]/92 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "bg-transparent",
        logoRing:
          "border-[#0B6B5C]/18 bg-[#0B6B5C]/8 text-[#0B6B5C] group-hover:border-[#0B6B5C]/34 group-hover:bg-[#0B6B5C]/12",
        logoMain: "text-[#0B6B5C]",
        logoSub: "text-[#17322D]/52",
        navText: "text-[#17322D]/74 group-hover:text-[#17322D]",
        navActive: "text-[#0B6B5C]",
        navLine: "bg-[#0B6B5C]",
        cta: "border-[#0B6B5C] bg-[#0B6B5C] text-[#FAF9F6] hover:opacity-92",
        mobileButton:
          "border-[#17322D]/10 bg-white/70 text-[#17322D] hover:border-[#0B6B5C]/30 hover:text-[#0B6B5C]",
        mobilePanel: "border-[#17322D]/8 bg-[#FAF9F6]/96",
        mobileItem:
          "text-[#17322D]/82 hover:bg-[#17322D]/[0.03] hover:text-[#17322D]",
        mobileItemActive: "bg-[#0B6B5C]/10 text-[#0B6B5C]",
      }
    : {
        header: isScrolled
          ? "shadow-[0_10px_40px_rgba(0,0,0,0.30)] backdrop-blur-xl"
          : "bg-transparent",
        logoRing:
          "border-brand-gold/22 bg-brand-gold/10 text-brand-gold group-hover:border-brand-gold/45 group-hover:bg-brand-gold/14",
        logoMain: "text-brand-gold",
        logoSub: "text-brand-offwhite/54",
        navText: "text-brand-offwhite/76 group-hover:text-brand-offwhite",
        navActive: "text-brand-gold",
        navLine: "bg-brand-gold",
        cta: "border-brand-gold bg-brand-gold text-brand-black hover:border-accent-gold hover:bg-accent-gold",
        mobileButton:
          "border-white/10 bg-brand-graphite/35 text-brand-offwhite hover:border-brand-gold/40 hover:text-brand-gold",
        mobilePanel: "border-white/8 bg-brand-black/95",
        mobileItem:
          "text-brand-offwhite/82 hover:bg-white/4 hover:text-brand-offwhite",
        mobileItemActive: "bg-brand-gold/12 text-brand-gold",
      };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${styles.header}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <Link to="/" className="group inline-flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${styles.logoRing}`}
            >
              <GiSaxophone className="h-[20px] w-[20px] -rotate-[12deg]" />
            </div>

            <div className="leading-none">
              <span
                className={`block font-title text-lg tracking-[0.22em] md:text-xl ${styles.logoMain}`}
              >
                TALESAX
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            <nav className="flex items-center gap-8 font-body text-sm">
              {navLinks.map((link) => {
                const active = isActive(link.path);

                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="group relative inline-flex items-center py-2 transition duration-300"
                  >
                    <span
                      className={
                        active
                          ? styles.navActive
                          : `${styles.navText} transition duration-300`
                      }
                    >
                      {link.label}
                    </span>

                    <span
                      className={`absolute -bottom-[1px] left-0 h-px transition-all duration-300 ${styles.navLine} ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <a
              href={contactHref}
              className={`inline-flex items-center justify-center rounded-full border px-5 py-3 font-body text-sm font-semibold transition duration-300 ${styles.cta}`}
            >
              Contato
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 lg:hidden ${styles.mobileButton}`}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-[76px] z-40 px-4 lg:hidden"
          >
            <div
              className={`overflow-hidden rounded-[1.75rem] border shadow-2xl backdrop-blur-xl ${styles.mobilePanel}`}
            >
              <nav className="flex flex-col px-5 py-5">
                {navLinks.map((link) => {
                  const active = isActive(link.path);

                  return (
                    <Link
                      key={link.label}
                      to={link.path}
                      className={`rounded-2xl px-4 py-4 font-body text-sm transition duration-300 ${
                        active ? styles.mobileItemActive : styles.mobileItem
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <a
                  href={contactHref}
                  className={`mt-4 inline-flex items-center justify-center rounded-full border px-5 py-4 font-body text-sm font-semibold transition duration-300 ${styles.cta}`}
                >
                  Contato
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
