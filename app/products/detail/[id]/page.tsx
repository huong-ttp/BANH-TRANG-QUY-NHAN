import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Truck } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { client } from "@/sanity/lib/client"
import { Metadata } from "next"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

// Hàm tạo Metadata SEO động
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params

  // Fetch dữ liệu sản phẩm để lấy meta data
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug: id }
  )

  if (!product) {
    return { title: "Không tìm thấy sản phẩm" }
  }

  return {
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.description,
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.description,
      images: product.image ? [urlFor(product.image).url()] : [],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug: id }
  )

  if (!product) {
    notFound()
  }

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
            className="object-cover w-full h-full"
          />
          {product.discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded animate-pulse">
              Giảm {product.discount}% 
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-emerald-800 dark:text-emerald-200">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">Đặc sản {product.origin}</p>
          
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

          <div className="mt-6 p-4 bg-emerald-50 rounded-lg dark:bg-emerald-950/50">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Truck className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
              Sản phẩm được phân phối bởi Bánh Tráng Quý Nhân
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Còn lại: {product.stock} {product.unit}
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            <a href={product.shopee} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">🛒 Mua trên Shopee</Button>
            </a>
            <a href={product.tiktok} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-black hover:bg-gray-800 text-white">🎵 Mua trên TikTok Shop</Button>
            </a>
          </div>

          <Tabs defaultValue="description" className="mt-8">
            <TabsList className="bg-emerald-50 dark:bg-emerald-950/50">
              <TabsTrigger value="description">Mô tả</TabsTrigger>
              <TabsTrigger value="nutrition">Thông tin sản phẩm</TabsTrigger>
              <TabsTrigger value="reviews">Hướng dẫn sử dụng</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">{product.details}</TabsContent>
            <TabsContent value="nutrition" className="pt-4 space-y-2">
              <p><strong>Xuất xứ:</strong> {product.origin}</p>
              <p><strong>Thành phần:</strong> {product.ingredients}</p>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4 space-y-2">
              <p><strong>Cách sử dụng:</strong> {product.usage}</p>
              <p><strong>Bảo quản:</strong> {product.storage}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}