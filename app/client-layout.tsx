"use client"

import type React from "react"

import Link from "next/link"
import { Heart, Menu, Search, User } from "lucide-react"
import { Suspense, useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { WishlistDrawer } from "@/components/wishlist-drawer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { useStore } from "@/lib/store"
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"

export default function ClientLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Force dark mode to be applied immediately on client side
  const [settings, setSettings] = useState<any>(null)
  useEffect(() => {
  const fetchSettings = async () => {
    const data = await client.fetch(
      SITE_SETTINGS_QUERY
    )

    setSettings(data)
  }

  fetchSettings()
}, [])

  return (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem
  >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-white dark:from-gray-950 dark:to-gray-900">
            <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
              <div className="container flex h-16 items-center px-4 md:px-6">
                <Link
  href="/"
  className="flex items-center max-w-[180px] md:max-w-none"
>
  <span
  className="
    text-base
    md:text-xl
    font-bold
    bg-gradient-to-r
    from-red-600
    to-orange-500
    bg-clip-text
    text-transparent
    leading-tight
  "
>
  {settings?.companyName ||
    "Bánh Tráng Quý Nhân"}
</span>
</Link>
                <div className="hidden md:flex md:flex-1">
                  
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
                    <Link href="/promotions">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-red-50 dark:hover:bg-red-950 transition-colors duration-200"
                    >
                      Khuyến mãi
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
                <div className="flex items-center gap-1 md:ml-auto">
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
                 <Sheet
  open={mobileMenuOpen}
  onOpenChange={setMobileMenuOpen}
>
  <SheetTrigger asChild>
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Menu</span>
    </Button>
  </SheetTrigger>

  <SheetContent side="right">
    <div className="flex flex-col gap-5 mt-8">

      <Link
        href="/products"
        onClick={() => setMobileMenuOpen(false)}
      >
        Sản phẩm
      </Link>
      <Link
        href="/promotions"
        onClick={() => setMobileMenuOpen(false)}
      >
        Khuyến mãi
      </Link>
      <Link
        href="/news"
        onClick={() => setMobileMenuOpen(false)}
      >
        Khám phá Tây Ninh
      </Link>
      
      <Link
        href="/about"
        onClick={() => setMobileMenuOpen(false)}
      >
        Giới thiệu
      </Link>

      <Link
        href="/contact"
        onClick={() => setMobileMenuOpen(false)}
      >
        Liên hệ
      </Link>

    </div>
  </SheetContent>
</Sheet>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <Suspense fallback={<div>Đang tải...</div>}>{children}</Suspense>
            </main>
            <footer className="border-t bg-white dark:bg-gray-950 dark:border-gray-800">
              <div className="container flex flex-col gap-6 py-8 md:px-6 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-red-700 mb-3">Sản phẩm</h3>
                    <Link
                      href="/products"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Tất cả sản phẩm
                    </Link>
                    <Link
                      href="/products"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Bánh Tráng
                    </Link>
                    <Link
                      href="/products"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Muối chấm
                    </Link>
                    <Link
                      href="/products"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Đồ ăn vặt
                    </Link>
                  </div>
                  
            
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-red-700 mb-3">Về chúng tôi</h3>
                    <Link
                      href="/about"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Giới thiệu
                    </Link>
                    <Link
                      href="/news"
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Khám Phá Tây Ninh
                    </Link>
                    <Link
                      href="/contact"
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
                    <h3 className="text-lg font-semibold text-red-700 mb-3">Kết nối với Quý Nhân</h3>
                    <Link
                      href={settings?.facebook || "#"}
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Facebook
                    </Link>
                    <Link
                      href={settings?.tiktok || "#"}
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Tiktok
                    </Link>
                    <Link
                      href={settings?.shopee || "#"}
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Shopee
                    </Link>
                    <Link
                      href={`https://zalo.me/${settings?.zalo || ""}`}
                      className="text-sm text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      Zalo
                    </Link>
                    
                  </div>
                  <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-red-700 mb-3">
                    Thông tin liên hệ
                  </h3>

                  <a
                    href={`tel:${settings?.hotline1}`}
                    className="text-sm text-gray-500 hover:text-red-600"
                  >
                    ☎ {settings?.hotline1}
                  </a>
                  <a
                    href={`tel:${settings?.hotline2}`}
                    className="text-sm text-gray-500 hover:text-red-600"
                  >

                    ☎ {settings?.hotline2}
                  </a>
                  
                  

                  
                </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                 <div className="border-t pt-4 mt-4">
  <p className="text-sm text-gray-500">
    © {new Date().getFullYear()} {settings?.companyName}
  </p>

  <p className="text-sm text-gray-500 mt-1">
    Văn phòng: 
    {settings?.officeAddress}
  </p>

  <p className="text-sm text-gray-500 break-words">
  📦 Kho 1: {settings?.warehouseAddress}
</p>

{settings?.warehouseAddress2 && (
  <p className="text-sm text-gray-500 break-words">
    📦 Kho 2: {settings?.warehouseAddress2}
  </p>
)}
</div>
                  
                  <div className="flex gap-4">
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <WishlistDrawer />
          <Toaster />
        </ThemeProvider>
          <WishlistDrawer />
    <Toaster />
  </ThemeProvider>
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

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
