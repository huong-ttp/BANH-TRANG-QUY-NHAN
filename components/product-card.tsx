"use client"

import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useStore } from "@/lib/store"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore()
  const { toast } = useToast()
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product._id))

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${product.name} đã được thêm vào giỏ hàng.`,
    })
  }

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product._id)
      setIsWishlisted(false)
      toast({
        title: "Đã xóa khỏi yêu thích",
        description: `${product.name} đã được xóa khỏi danh sách yêu thích.`,
      })
    } else {
      addToWishlist(product)
      setIsWishlisted(true)
      toast({
        title: "Đã thêm vào yêu thích",
        description: `${product.name} đã được thêm vào danh sách yêu thích.`,
      })
    }
  }

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:border-emerald-600 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-900 dark:hover:border-emerald-500">      <Link href={`/products/detail/${product.slug}`} className="flex flex-col flex-1">
        <div className="relative aspect-square overflow-hidden">
          <img
  src={product.image || "/placeholder.svg"}
  alt={product.name}
  className="
    w-full
    h-full
    object-cover
    transition-transform
    duration-500
    group-hover:scale-110
  "
/>
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
              {product.discount}% OFF
            </div>
          )}
        </div>
        {product.trending && (
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
    🔥 HOT
        </div>
        )}

      {product.isNew && (
    <div className="absolute top-10 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
    ✨ MỚI
    </div>
        )}
        <div className="p-4 flex flex-col flex-1">
          <h3
  className="
    font-medium
    line-clamp-2
    min-h-[56px]
    group-hover:text-emerald-600
    dark:group-hover:text-emerald-400
    transition-colors
    duration-200
  "
>
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{product.price.toLocaleString("vi-VN")}đ</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice.toLocaleString("vi-VN")}đ</span>
            )}
          </div>
          <p
  className="
    text-sm
    text-gray-500
    mt-1
    line-clamp-2
    min-h-[40px]
  "
>
         {product.description}
          </p>

          <p className="text-xs text-green-600 mt-2">
          Còn {product.stock} sản phẩm
        </p>
        </div>
      </Link>
      <div className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className={`${isWishlisted ? "text-red-500 border-red-200" : ""} transition-all duration-300 hover:scale-110`}
          onClick={toggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500" : ""}`} />
        </Button>
      </div>
    </div>
  )
}
