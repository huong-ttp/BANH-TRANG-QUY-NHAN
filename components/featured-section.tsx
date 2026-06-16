"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

interface Props {
  trendingProducts: any[]
  bestsellerProducts: any[]
  newProducts: any[]
}

export function FeaturedSection({
  trendingProducts,
  bestsellerProducts,
  newProducts,
}: Props) {
  const [activeTab, setActiveTab] = useState("trending")

  let filteredProducts = trendingProducts

  if (activeTab === "bestsellers") {
    filteredProducts = bestsellerProducts
  }

  if (activeTab === "new") {
    filteredProducts = newProducts
  }

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32
      bg-gradient-to-b
      from-orange-50 via-amber-50 to-orange-100
      dark:from-gray-950 dark:via-gray-900 dark:to-black"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Đặc sản nổi bật
            </h2>

            <p className="max-w-[900px] text-gray-600 dark:text-gray-300">
              Khám phá những sản phẩm đặc sản được nhiều khách hàng yêu thích.
            </p>
          </div>

          <div className="flex space-x-4 border-b w-full max-w-md justify-center">
            <button
              onClick={() => setActiveTab("trending")}
              className={`pb-2 px-4 ${
                activeTab === "trending"
                  ? "border-b-2 border-green-600 font-medium text-green-600"
                  : "text-gray-500"
              }`}
            >
              Phổ biến
            </button>

            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`pb-2 px-4 ${
                activeTab === "bestsellers"
                  ? "border-b-2 border-green-600 font-medium text-green-600"
                  : "text-gray-500"
              }`}
            >
              Bán chạy
            </button>

            <button
              onClick={() => setActiveTab("new")}
              className={`pb-2 px-4 ${
                activeTab === "new"
                  ? "border-b-2 border-green-600 font-medium text-green-600"
                  : "text-gray-500"
              }`}
            >
              Mới nhất
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {filteredProducts.map((product: any) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/products">
            <Button variant="outline" className="gap-1">
              Xem tất cả sản phẩm
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}