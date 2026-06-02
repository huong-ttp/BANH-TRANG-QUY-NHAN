"use client"

import Link from "next/link"
import { Heart, ShoppingCart, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useStore } from "@/lib/store"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useStore()
  const { toast } = useToast()

  const handleAddToCart = (productId: string) => {
    const item = wishlist.find((item) => item.product.id === productId)
    if (item) {
      addToCart(item.product)
      toast({
        title: "Đã thêm vào giỏ hàng",
        description: `${item.product.name} đã được thêm vào giỏ hàng`,
      })
    }
  }

  const handleRemoveFromWishlist = (productId: string) => {
    const item = wishlist.find((item) => item.product.id === productId)
    if (item) {
      removeFromWishlist(productId)
      toast({
        title: "Đã xóa khỏi danh sách yêu thích",
        description: `${item.product.name} đã được xóa khỏi danh sách yêu thích`,
      })
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Sản phẩm yêu thích</h1>
          <p className="text-gray-500">Những sản phẩm bạn đã lưu để mua sau</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Heart className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium">Chưa có sản phẩm yêu thích</h3>
            <p className="text-gray-500 mt-1 mb-6">Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.</p>
            <Link href="/products">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Xem sản phẩm</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div key={item.product.id} className="border rounded-lg overflow-hidden bg-white dark:bg-gray-950">
                <div className="relative">
                  <Link href={`/products/${item.product.id}`}>
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-red-50"
                    onClick={() => handleRemoveFromWishlist(item.product.id)}
                  >
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
                <div className="p-4">
                  <Link href={`/products/${item.product.id}`}>
                    <h3 className="font-medium hover:text-emerald-600">{item.product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      ${item.product.price.toFixed(2)}
                    </span>
                    {item.product.originalPrice > item.product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button
                    className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleAddToCart(item.product.id)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
