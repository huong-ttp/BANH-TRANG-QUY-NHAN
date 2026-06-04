import type React from "react"
import { Inter } from "next/font/google"

import ClientLayout from "./client-layout"
import type { Metadata } from "next"
const inter = Inter({ subsets: ["latin"] })

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
    telephone: "+84xxxxxxxxx",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tây Ninh",
      addressRegion: "Tây Ninh",
      addressCountry: "VN",
    },
    image: "https://banhtrangquynhan.vn/og-image.jpg",
    sameAs: [
    "https://facebook.com/...",
    "https://www.tiktok.com/...",
    ]
  }

  return (
    <html lang="vi">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'