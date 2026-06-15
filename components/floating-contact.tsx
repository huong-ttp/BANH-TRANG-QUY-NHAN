"use client"

import Image from "next/image"
import { Phone } from "lucide-react"

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Gọi điện */}
      <a
        href="tel:0828266468"
        className="group"
      >
        <div className="w-16 h-16 rounded-full bg-green-600 text-white shadow-xl flex items-center justify-center animate-ring hover:scale-110 transition-all duration-300">
          <Phone size={28} />
        </div>
      </a>

      {/* Facebook Messenger */}
      <a
        href="https://www.facebook.com/banhtrangnguyenkhang"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center animate-ring hover:scale-110 transition-all duration-300">
          <Image
            src="/facebook.jpg"
            alt="Facebook"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0828266468"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center animate-ring hover:scale-110 transition-all duration-300">
          <Image
            src="/zalo.jpg"
            alt="Zalo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </a>

    </div>
  )
}