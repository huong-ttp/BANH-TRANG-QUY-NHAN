"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Heart, Menu, Search, User } from "lucide-react"
import { Suspense, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { WishlistDrawer } from "@/components/wishlist-drawer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { useStore } from "@/lib/store"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Force dark mode to be applied immediately on client side
  useEffect(() => {
    // Check if dark mode is stored in localStorage
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-white dark:from-gray-950 dark:to-gray-900">
            <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
              <div className="container flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                 <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                    Bánh Tráng Quý Nhân
                  </span>
                </Link>
                <div className="hidden md:flex md:flex-1">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Tìm bánh tráng, muối tôm..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-full"
                    />
                  </div>
                  <nav className="ml-auto flex items-center space-x-1">
                    <Link href="/products">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-orange-100 dark:hover:bg-orange-950 transition-colors duration-200"
                      >
                        Sản phẩm
                      </Button>
                    </Link>
                    <Link href="/news">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-emerald-50 dark:hover:bg-orange-950 transition-colors duration-200"
                      >
                        Khám phá Tây Ninh
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-emerald-50 dark:hover:bg-orange-950 transition-colors duration-200"
                      >
                        Giới thiệu
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-emerald-50 dark:hover:bg-orange-950 transition-colors duration-200"
                      >
                        Liên hệ
                      </Button>
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center md:ml-auto">
                  <ThemeToggle />
                  <WishlistButton />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-1 hover:bg-emerald-50 dark:hover:bg-orange-950 transition-colors duration-200"
                  >
                    <User className="h-5 w-5" />
                    <span className="sr-only">Tài khoản</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden hover:bg-emerald-50 dark:hover:bg-orange-950 transition-colors duration-200"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <Suspense fallback={<div>Đang tải...</div>}>{children}</Suspense>
            </main>
            <footer className="border-t bg-white dark:bg-gray-950 dark:border-gray-800">
              <div className="container flex flex-col gap-6 py-8 md:px-6 md:py-12">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Sản phẩm</h3>
                    <Link
                      href="/products"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Tất cả sản phẩm
                    </Link>
                    <Link
                      href="/products/fruits-vegetables"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Bánh Tráng
                    </Link>
                    <Link
                      href="/products/dairy-paneer"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Muối chấm
                    </Link>
                    <Link
                      href="/products/pulses-grains"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Đồ ăn vặt
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Hỗ trợ khách hàng</h3>
                    <Link
                      href="/dashboard"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Hướng dẫn mua hàng
                    </Link>
                    <Link
                      href="/dashboard?tab=orders"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Chính sách giao hàng
                    </Link>
                    <Link
                      href="/dashboard?tab=wallet"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Chính sách đổi trả
                    </Link>
                    <Link
                      href="/dashboard?tab=rewards"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Liên hệ
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Về chúng tôi</h3>
                    <Link
                      href="/about"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Giới thiệu
                    </Link>
                    <Link
                      href="/careers"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Tin tức
                    </Link>
                    <Link
                      href="/blog"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Chính sách
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Liên hệ
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Các trang liên hệ</h3>
                    <Link
                      href="/terms"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Facebook
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Tiktok
                    </Link>
                    <Link
                      href="/shipping"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Shopee
                    </Link>
                    <Link
                      href="/refund"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Zalo
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-500">
                    © 2025 Bánh Tráng Quý Nhân - Đặc sản Tây Ninh.
                  </p>
                  <div className="flex gap-4">
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <WishlistDrawer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



function WishlistButton() {
  return <ClientWishlist />
}

function ClientCart() {
  const { toggleCart, getCartItemsCount } = useStore()
  const itemCount = getCartItemsCount()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="mr-1 relative hover:bg-emerald-50 dark:hover:bg-orange-950 transition-colors duration-200"
      onClick={toggleCart}
    >
    </Button>
  )
}

function ClientWishlist() {
  const { toggleWishlist, getWishlistItemsCount } = useStore()
  const itemCount = getWishlistItemsCount()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="mr-1 relative hover:bg-emerald-50 dark:hover:bg-orange-950 transition-colors duration-200"
      onClick={toggleWishlist}
    >
      <Heart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {itemCount}
        </span>
      )}
      <span className="sr-only">Danh sách yêu thích</span>
    </Button>
  )
}
