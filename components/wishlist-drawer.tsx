"use client"

import { Heart, ShoppingCart, Trash, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { useStore } from "@/lib/store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { formatPrice } from "@/lib/utils"

export function WishlistDrawer() {
  const { wishlist, isWishlistOpen, toggleWishlist, removeFromWishlist, addToCart } = useStore()

  const { toast } = useToast()

  if (!isWishlistOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-lg flex flex-col animate-in slide-in-from-right">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
          <div className="flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            <h2 className="font-semibold text-lg">Sản phẩm yêu thích ({wishlist.length})</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleWishlist}
            className="hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <Heart className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="font-medium text-lg mb-2">Chưa có sản phẩm yêu thích</h3>
            <p className="text-gray-500 mb-6">Bạn chưa thêm sản phẩm nào vào danh sách yêu thích.</p>
            <Button
              onClick={toggleWishlist}
              className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Tiếp tục mua sắm
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {wishlist.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 py-2 group hover:bg-red-50/30 dark:hover:bg-red-950/20 p-2 rounded-lg transition-colors duration-200"
                  >
                    <div className="w-20 h-20 rounded-md overflow-hidden">
                      <img
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <Link href={`/products/${item.product.id}`} onClick={toggleWishlist}>
                        <h4 className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                          {item.product.name}
                        </h4>
                      </Link>
                      <p className="text-sm text-gray-500">{formatPrice(item.product.price)} / {item.product.unit}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs h-8 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                          onClick={() => {
                            addToCart(item.product)
                            toast({
                              title: "Đã thêm vào giỏ hàng",
                              description: `${item.product.name} đã được thêm vào giỏ hàng.`,
                            })
                          }}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Thêm vào giỏ hàng
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                    <span className="font-medium">
  {                  formatPrice(item.product.price)}
                    </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                        onClick={() => removeFromWishlist(item.product.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t dark:border-gray-800">
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                  onClick={toggleWishlist}
                >
                  Tiếp tục mua sắm
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
