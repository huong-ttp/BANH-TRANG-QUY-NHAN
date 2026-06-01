import type React from "react"
import { Inter } from "next/font/google"

import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bánh tráng Quý Nhân - Đặc sản Tây Ninh",
  description:
    "Chuyên bánh tráng Tây Ninh, muối tôm, bánh tráng phơi sương chính gốc",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'