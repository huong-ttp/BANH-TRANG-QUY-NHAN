"use client"
import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { ProductsFilter } from "@/components/products-filter"
import { categories, featuredProducts } from "@/lib/data"
import {Select, SelectContent, SelectItem, SelectTrigger,SelectValue,} from "@/components/ui/select"
interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  
  // Find the category by slug
  const category = categories.find((cat) => cat.slug === params.category)

  // If category doesn't exist, return 404
  if (!category) {
    notFound()
  }
  const [sortBy, setSortBy] = useState("default")
  // Filter products by category
  const filteredProducts = featuredProducts
  .filter(
    (product) =>
      product.category === params.category
  )
  .sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price

      case "price-high":
        return b.price - a.price

      case "name":
        return a.name.localeCompare(b.name)

      default:
        return 0
    }
  })

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại tất cả các sản phẩm
          </Link>
          <h1 className="text-3xl font-bold">{category.name}</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
              <Input placeholder={`Tìm kiếm trong danh mục ${category.name.toLowerCase()}...`} className="pl-10" />
              <div className="absolute left-3 top-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="sm:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Lọc
              </Button>
              <Select
  value={sortBy}
  onValueChange={setSortBy}
>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Sắp xếp" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="default">
      Mặc định
    </SelectItem>

    <SelectItem value="price-low">
      Giá thấp → cao
    </SelectItem>

    <SelectItem value="price-high">
      Giá cao → thấp
    </SelectItem>

    <SelectItem value="name">
      Tên A → Z
    </SelectItem>
  </SelectContent>
</Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          <div className="block md:block">
          
          </div>
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <h3 className="text-lg font-medium">Không có sản phẩm nào được tìm thấy</h3>
                <p className="text-gray-500 mt-1">Thử chỉnh lại bộ lọc hoặc cụm từ tìm kiếm của bạn.</p>
                <Link href="/products">
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">Xem tất cả sản phẩm</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
