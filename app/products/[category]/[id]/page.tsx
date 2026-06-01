"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { featuredProducts } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { useStore } from "@/lib/store"
import { useToast } from "@/hooks/use-toast"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = featuredProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = featuredProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 group">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          {product.discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded animate-pulse">
              {product.discount}% OFF
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              ₹{product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
            )}
            <span className="text-sm text-gray-500">/ {product.unit}</span>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-400">{product.description}</p>

          <div className="mt-6 p-4 bg-emerald-50 rounded-lg dark:bg-emerald-950/50 transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Truck className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
              Free delivery on orders over ₹1500
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              In Stock: {product.stock} {product.unit}s available
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

    <a
      href={product.lazada}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        🛍️ Mua trên Lazada
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
                Description
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="data-[state=active]:bg-emerald-100 dark:data-[state=active]:bg-emerald-900"
              >
                Nutrition
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-emerald-100 dark:data-[state=active]:bg-emerald-900"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-gray-600 dark:text-gray-400">
                {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </TabsContent>
            <TabsContent value="nutrition" className="pt-4">
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">Nutrition information per serving:</p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                  <li>Calories: 120</li>
                  <li>Total Fat: 0g</li>
                  <li>Sodium: 0mg</li>
                  <li>Total Carbohydrate: 29g</li>
                  <li>Sugars: 15g</li>
                  <li>Protein: 1g</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <p className="text-gray-600 dark:text-gray-400">No reviews yet. Be the first to review this product!</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-emerald-800 dark:text-emerald-200">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
