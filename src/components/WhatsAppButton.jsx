import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const phoneNumber = "5511999999999"
  const message =
    "Olá, vi seu site e gostaria de um orçamento para evento."

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        rounded-full bg-green-500 px-5 py-4
        text-white
        shadow-lg shadow-green-500/20
        transition-all duration-300
        hover:scale-110 hover:bg-green-600
        animate-bounce
      "
      style={{ animationDuration: "2s" }}
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden font-medium md:block">
        Falar no WhatsApp
      </span>
    </a>
  )
}
