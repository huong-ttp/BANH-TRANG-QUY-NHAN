import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

import ClientLayout from "./client-layout"
import FloatingContact from "@/components/floating-contact"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://banhtrangquynhan.vn"
  ),

  title: {
    default: "Bánh Tráng Quý Nhân",
    template: "%s | Bánh Tráng Quý Nhân",
  },

  description:
    "Đặc sản Tây Ninh chính gốc từ Bánh Tráng Quý Nhân.",

  keywords: [
    "bánh tráng tây ninh",
    "đặc sản tây ninh",
    "muối tôm tây ninh",
    "bánh tráng quý nhân",
  ],

  openGraph: {
    title: "Bánh Tráng Quý Nhân",

    description:
      "Đặc sản Tây Ninh chính gốc từ Bánh Tráng Quý Nhân.",

    url: "https://banhtrangquynhan.vn",

    siteName: "Bánh Tráng Quý Nhân",

    locale: "vi_VN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bánh Tráng Quý Nhân",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bánh Tráng Quý Nhân",
    description:
      "Đặc sản Tây Ninh chính gốc từ Bánh Tráng Quý Nhân.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bánh Tráng Quý Nhân",
    description:
      "Chuyên sản xuất và phân phối bánh tráng, muối chấm và đặc sản Tây Ninh.",
    url: "https://banhtrangquynhan.vn",
    telephone: "+8428266468",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tây Ninh",
      addressRegion: "Tây Ninh",
      addressCountry: "VN",
    },
    image: "https://banhtrangquynhan.vn/og-image.jpg",
    sameAs: [
      "https://www.facebook.com/banhtrangnguyenkhang",
      "https://www.tiktok.com/...",
    ],
  }

  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <ClientLayout>
          {children}
        </ClientLayout>

        <FloatingContact />
      </body>
    </html>
  )
}