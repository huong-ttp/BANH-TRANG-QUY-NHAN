import { client } from "@/sanity/lib/client"
import { Metadata } from "next"
import {
  PAGINATED_ALL_PRODUCTS_QUERY,
  ALL_PRODUCTS_COUNT_QUERY,
  CATEGORIES_QUERY,
} from "@/sanity/lib/queries"
import { AppPagination } from "@/components/pagination"
import ProductsClient from "./products-client"

export const metadata: Metadata = {
  title: "Tất cả sản phẩm | Đặc Sản Bánh Tráng Tây Ninh Chính Gốc",
  description: "Khám phá danh sách các loại bánh tráng phơi sương, bánh tráng trộn, muối tôm và đặc sản Tây Ninh thơm ngon nhất tại Bánh Tráng Quý Nhân.",
}

export default async function ProductsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  
  // Logic phân trang
  const currentPage = Number(page) || 1
  const pageSize = 12 // Hiển thị 12 sản phẩm mỗi trang
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

  // Fetch dữ liệu theo trang và tổng số sản phẩm
  const [products, totalProducts, categories] = await Promise.all([
    client.fetch(PAGINATED_ALL_PRODUCTS_QUERY, { start, end }),
    client.fetch(ALL_PRODUCTS_COUNT_QUERY),
    client.fetch(CATEGORIES_QUERY)
  ])

  const totalPages = Math.ceil(totalProducts / pageSize)

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductsClient
        products={products}
        categories={categories}
      />
      
      {/* Nút phân trang ở dưới danh sách sản phẩm */}
      <AppPagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        baseUrl="/products" 
      />
    </div>
  )
}