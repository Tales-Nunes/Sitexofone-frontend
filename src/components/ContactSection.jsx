import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isWeddingPage = currentPath.startsWith("/eventos/casamento");

  const [eventType, setEventType] = useState("");

  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de solicitar um orçamento para evento.",
  );

  const eventOptions = [
    { label: "Casamento", value: "casamento" },
    { label: "Coquetel", value: "coquetel" },
    { label: "Corporativo", value: "corporativo" },
    { label: "Evento social", value: "social" },
    { label: "Outro", value: "outro" },
  ];

  const contactCards = [
    {
      title: "WhatsApp",
      value: "+55 (11) 9 9698-3359",
      description: "Atendimento direto para orçamento e disponibilidade.",
      href: `https://wa.me/5511996983359?text=${whatsappMessage}`,
      external: true,
      icon: <FaWhatsapp className="h-[18px] w-[18px]" />,
    },
    {
      title: "Instagram",
      value: "@talesax",
      description: "Registros, bastidores e apresentações recentes.",
      href: "https://instagram.com/talesax",
      external: true,
      icon: <FaInstagram className="h-[18px] w-[18px]" />,
    },
    {
      title: "E-mail",
      value: "talesnunes.siqueira@gmail.com",
      description: "Contato para propostas, eventos e informações comerciais.",
      href: "mailto:talesnunes.siqueira@gmail.com",
      external: false,
      icon: <Mail className="h-[18px] w-[18px]" />,
    },
  ];

  const styles = isWeddingPage
    ? {
        section: "bg-[#FAF9F6] text-[#17322D]",
        label: "text-[#0B6B5C]",
        heading: "text-[#17322D]",
        body: "text-[#17322D]/72",
        card: "border-[#17322D]/8 bg-white/78 hover:border-[#0B6B5C]/22 hover:bg-white",
        cardIcon:
          "border-[#0B6B5C]/18 bg-[#0B6B5C]/8 text-[#0B6B5C] group-hover:border-[#0B6B5C]/28 group-hover:bg-[#0B6B5C]/12",
        cardTitle: "text-[#17322D]/46",
        cardValue: "text-[#17322D]",
        cardDesc: "text-[#17322D]/58",
        formWrap:
          "border-[#17322D]/8 bg-white/78 shadow-[0_20px_80px_rgba(0,0,0,0.08)]",
        formTitle: "text-[#17322D]",
        formText: "text-[#17322D]/62",
        input:
          "border-[#17322D]/8 bg-[#FAF9F6] text-[#17322D] placeholder-[#17322D]/34 focus:border-[#0B6B5C]/36 focus:ring-2 focus:ring-[#0B6B5C]/12",
        selectTrigger:
          "border-[#17322D]/8 bg-[#FAF9F6] text-[#17322D] focus:border-[#0B6B5C]/36 focus:ring-2 focus:ring-[#0B6B5C]/12 data-[placeholder]:text-[#17322D]/34",
        selectIcon: "text-[#17322D]/50",
        selectContent:
          "border-[#17322D]/8 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.16)]",
        selectItem:
          "text-[#17322D] data-[highlighted]:bg-[#0B6B5C]/10 data-[highlighted]:text-[#0B6B5C]",
        selectIndicator: "text-[#0B6B5C]",
        button: "bg-[#0B6B5C] text-[#FAF9F6] hover:opacity-92",
      }
    : {
        section: "bg-brand-black text-brand-offwhite",
        label: "text-brand-gold",
        heading: "text-brand-offwhite",
        body: "text-brand-offwhite/72",
        card: "border-white/8 bg-brand-graphite/18 hover:border-brand-gold/22 hover:bg-brand-graphite/26",
        cardIcon:
          "border-brand-gold/18 bg-brand-gold/10 text-brand-gold group-hover:border-brand-gold/30 group-hover:bg-brand-gold/14",
        cardTitle: "text-brand-offwhite/46",
        cardValue: "text-brand-offwhite",
        cardDesc: "text-brand-offwhite/58",
        formWrap:
          "border-white/8 bg-brand-graphite/16 shadow-[0_20px_80px_rgba(0,0,0,0.24)]",
        formTitle: "text-brand-offwhite",
        formText: "text-brand-offwhite/62",
        input:
          "border-white/8 bg-brand-black/60 text-brand-offwhite placeholder-brand-offwhite/34 focus:border-brand-gold/40 focus:ring-2 focus:ring-brand-gold/15",
        selectTrigger:
          "border-white/8 bg-brand-black/60 text-brand-offwhite focus:border-brand-gold/40 focus:ring-2 focus:ring-brand-gold/15 data-[placeholder]:text-brand-offwhite/34",
        selectIcon: "text-brand-offwhite/50",
        selectContent:
          "border-white/8 bg-[#111111] shadow-[0_20px_80px_rgba(0,0,0,0.38)]",
        selectItem:
          "text-brand-offwhite data-[highlighted]:bg-brand-gold/10 data-[highlighted]:text-brand-gold",
        selectIndicator: "text-brand-gold",
        button: "bg-brand-gold text-brand-black hover:bg-accent-gold",
      };

  return (
    <section id="contato" className={`px-6 py-24 md:py-28 ${styles.section}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <span
              className={`font-body text-xs uppercase tracking-[0.24em] ${styles.label}`}
            >
              Contato
            </span>

            <h2
              className={`mt-4 max-w-xl font-title text-3xl leading-tight md:text-5xl ${styles.heading}`}
            >
              Vamos conversar sobre o seu evento
            </h2>

            <p
              className={`mt-6 max-w-xl font-body text-lg leading-relaxed ${styles.body}`}
            >
              Atendimento para a região da capital de São Paulo, com foco em
              casamentos, eventos corporativos, coquetéis, recepções e ocasiões
              sociais sofisticadas.
            </p>

            <div className="mt-10 space-y-4">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noreferrer" : undefined}
                  className={`group flex items-start gap-4 rounded-[1.6rem] border px-5 py-5 transition duration-300 ${styles.card}`}
                >
                  <div
                    className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 ${styles.cardIcon}`}
                  >
                    {card.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <span
                      className={`block font-body text-[11px] uppercase tracking-[0.22em] ${styles.cardTitle}`}
                    >
                      {card.title}
                    </span>

                    <span
                      className={`mt-2 block overflow-hidden text-ellipsis font-body text-[15px] leading-relaxed md:text-base ${styles.cardValue}`}
                    >
                      {card.value}
                    </span>

                    <p
                      className={`mt-2 max-w-md font-body text-sm leading-relaxed ${styles.cardDesc}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`rounded-[2rem] border p-6 md:p-8 ${styles.formWrap}`}
          >
            <div className="mb-8">
              <span
                className={`font-body text-xs uppercase tracking-[0.22em] ${styles.label}`}
              >
                Solicitação
              </span>

              <h3
                className={`mt-3 font-title text-2xl md:text-3xl ${styles.formTitle}`}
              >
                Solicitar contato
              </h3>

              <p
                className={`mt-3 max-w-lg font-body text-sm leading-relaxed md:text-base ${styles.formText}`}
              >
                Envie as informações principais do evento para iniciar a
                conversa de forma mais objetiva.
              </p>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    className={`mb-2 block font-body text-sm ${styles.body}`}
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    required
                    className={`w-full rounded-2xl px-5 py-4 font-body outline-none transition duration-300 ${styles.input}`}
                  />
                </div>

                <div>
                  <label
                    className={`mb-2 block font-body text-sm ${styles.body}`}
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    required
                    className={`w-full rounded-2xl px-5 py-4 font-body outline-none transition duration-300 ${styles.input}`}
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    className={`mb-2 block font-body text-sm ${styles.body}`}
                  >
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className={`w-full rounded-2xl px-5 py-4 font-body outline-none transition duration-300 ${styles.input}`}
                  />
                </div>

                <div>
                  <label
                    className={`mb-2 block font-body text-sm ${styles.body}`}
                  >
                    Tipo de evento
                  </label>

                  <Select.Root value={eventType} onValueChange={setEventType}>
                    <Select.Trigger
                      className={`inline-flex h-[58px] w-full items-center justify-between rounded-2xl px-5 font-body outline-none transition duration-300 ${styles.selectTrigger}`}
                      aria-label="Tipo de evento"
                    >
                      <Select.Value placeholder="Selecione o tipo de evento" />

                      <Select.Icon className={styles.selectIcon}>
                        <ChevronDown className="h-4 w-4" />
                      </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                      <Select.Content
                        position="popper"
                        sideOffset={8}
                        className={`z-50 overflow-hidden rounded-2xl border ${styles.selectContent}`}
                      >
                        <Select.Viewport className="p-2">
                          {eventOptions.map((option) => (
                            <Select.Item
                              key={option.value}
                              value={option.value}
                              className={`relative flex cursor-pointer select-none items-center rounded-xl px-4 py-3 font-body text-sm outline-none transition duration-200 ${styles.selectItem}`}
                            >
                              <Select.ItemText>{option.label}</Select.ItemText>

                              <Select.ItemIndicator
                                className={`absolute right-4 inline-flex items-center ${styles.selectIndicator}`}
                              >
                                <Check className="h-4 w-4" />
                              </Select.ItemIndicator>
                            </Select.Item>
                          ))}
                        </Select.Viewport>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>

                  <input type="hidden" name="eventType" value={eventType} />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    className={`mb-2 block font-body text-sm ${styles.body}`}
                  >
                    Data do evento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex.: 18/09/2026"
                    className={`w-full rounded-2xl px-5 py-4 font-body outline-none transition duration-300 ${styles.input}`}
                  />
                </div>

                <div>
                  <label
                    className={`mb-2 block font-body text-sm ${styles.body}`}
                  >
                    Cidade / local
                  </label>
                  <input
                    type="text"
                    placeholder="Ex.: São Paulo - SP"
                    className={`w-full rounded-2xl px-5 py-4 font-body outline-none transition duration-300 ${styles.input}`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`mb-2 block font-body text-sm ${styles.body}`}
                >
                  Mensagem
                </label>
                <textarea
                  rows="5"
                  placeholder="Conte um pouco sobre o evento, formato desejado e horário aproximado."
                  required
                  className={`w-full rounded-2xl px-5 py-4 font-body outline-none transition duration-300 ${styles.input}`}
                />
              </div>

              <button
                type="submit"
                className={`mt-2 inline-flex items-center justify-center rounded-full px-8 py-4 font-body text-sm font-semibold tracking-wide transition duration-300 ${styles.button}`}
              >
                Enviar solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
