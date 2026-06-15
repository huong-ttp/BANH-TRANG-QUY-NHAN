

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Truck } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { client } from "@/sanity/lib/client"



interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params

  const product = await client.fetch(
  `*[_type == "product" && slug.current == $slug][0]`,
  { slug: id }
)
console.log("slug =", id)
console.log("product =", product)
  if (!product) {
    notFound()
  }

  const relatedProducts = await client.fetch(
  `*[
    _type == "product" &&
    category == $category &&
    _id != $id
  ][0...4]`,
  {
    category: product.category,
    id: product._id,
  }
)
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Quay lại sản phẩm
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 group">
          <img
          src={
            product.image
              ? urlFor(product.image).width(800).url()
              : "/placeholder.svg"
          }
          alt={product.name}
        />
          {product.discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded animate-pulse">
              Giảm {product.discount}% 
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">
          Đặc sản {product.origin}
        </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {product.price.toLocaleString("vi-VN")}đ
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">{product.originalPrice.toLocaleString("vi-VN")}đ</span>
            )}
            <span className="text-sm text-gray-500">/ {product.unit}</span>
          </div>
          <div className="mt-4">
          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            🌾 Đặc sản Tây Ninh
          </span>
        </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{product.description}</p>

          <div className="mt-6 p-4 bg-emerald-50 rounded-lg dark:bg-emerald-950/50 transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Truck className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
              Sản phẩm được phân phối bởi Bánh Tráng Quý Nhân
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Còn lại: {product.stock} {product.unit}
            </div>
          </div>

          <div className="mt-8">
  <h3 className="font-semibold text-lg mb-4">
    Mua sản phẩm tại
  </h3>

  <div className="grid gap-3">

    <a
      href={product.shopee}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        🛒 Mua trên Shopee
      </Button>
    </a>

    <a
      href={product.tiktok}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="w-full bg-black hover:bg-gray-800 text-white">
        🎵 Mua trên TikTok Shop
      </Button>
    </a>

    

  </div>
</div>

          <Tabs defaultValue="description" className="mt-8">
            <TabsList className="bg-emerald-50 dark:bg-emerald-950/50">
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-emerald-100 dark:data-[state=active]:bg-emerald-900"
              >
                Mô tả
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="data-[state=active]:bg-emerald-100 dark:data-[state=active]:bg-emerald-900"
              >
                Thông tin sản phẩm
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-emerald-100 dark:data-[state=active]:bg-emerald-900"
              >
                Hướng dẫn sử dụng
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-gray-600 dark:text-gray-400">
                {product.details}
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p>
                <strong>Cách sử dụng:</strong> {product.usage}
              </p>

              <p>
                <strong>Bảo quản:</strong> {product.storage}
              </p>
            </div>
          </TabsContent>
          </Tabs>
        </div>
      </div>
      {/*
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-800 dark:text-emerald-200">Sản phẩm liên quan</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            //ProductCard key={product._id} product={product} />
         ))}
       </div>
     </div>
      */}
    </div>
  )
}
