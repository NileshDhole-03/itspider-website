import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919206060304?text=Hi%20ITSpider%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
      <span className="absolute right-full mr-3 hidden group-hover:flex items-center rounded-lg bg-gray-900 text-white text-sm font-medium px-3 py-2 whitespace-nowrap shadow-lg">
        Chat with us
      </span>
    </a>
  )
}
