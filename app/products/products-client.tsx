"use client"
import {Sheet, SheetContent, SheetHeader, SheetTitle,} from "@/components/ui/sheet"
import { useState } from "react"

import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { ProductsFilter } from "@/components/products-filter"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
interface Product {
  _id: string
  slug: string
  name: string
  image: string
  price: number
  originalPrice: number
  discount: number
  stock: number
  description: string
  category: string
  trending?: boolean
}
export default function ProductsClient({
  products,
}: {
  products: Product[]
}) {
  const [sortBy, setSortBy] = useState("default")
  const [openFilter, setOpenFilter] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  

  const filteredProducts = products
  .filter((product) => {
    const matchSearch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    const matchCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory

    const matchPrice =
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]

    return (
      matchSearch &&
      matchCategory &&
      matchPrice
    )
  })
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
          <div className="rounded-2xl overflow-hidden mb-6">
  <img
    src="/banner-banhtrang.jpg"
    alt="Bánh Tráng Quý Nhân"
    className="
    w-full
    h-[180px]
    md:h-[250px]
    object-cover
    "
  />
</div>
         <div className="text-center mb-1">

  <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
    🌶️ Đặc sản Tây Ninh
  </span>

  <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
    Tất Cả Sản Phẩm Bánh Tráng Quý Nhân
  </h1>
</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
              <Input placeholder="Tìm kiếm sản phẩm..." className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
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
              <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setOpenFilter(true)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Bộ lọc
            </Button>
              <Select
  value={sortBy}
  onValueChange={setSortBy}
>
  <SelectTrigger className="w-[180px]">
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
        <Sheet
  open={openFilter}
  onOpenChange={setOpenFilter}
>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>
        Bộ lọc sản phẩm
      </SheetTitle>
    </SheetHeader>

    <div className="mt-6">
      <ProductsFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </div>
  </SheetContent>
</Sheet>
       <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8"> 

  {/* Sidebar */}
  <div className="hidden md:block">
    <ProductsFilter
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
    />
  </div>

  {/* Products */}
  <div>

    <p className="text-gray-500 mb-4">
      Hiển thị {filteredProducts.length} sản phẩm
    </p>

    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    ) : (
      <div className="text-center py-20">
        <h3 className="text-xl font-semibold">
          Không tìm thấy sản phẩm
        </h3>

        <p className="text-gray-500 mt-2">
          Hãy thử từ khóa khác.
        </p>
      </div>
    )}

  </div>
</div>
      </div>
    </div>
  )
}