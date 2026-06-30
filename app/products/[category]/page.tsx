import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { Metadata } from "next"
import {
  CATEGORY_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  PRODUCTS_COUNT_QUERY
} from "@/sanity/lib/queries"
import { AppPagination } from "@/components/pagination"
import CategoryClient from "./category-client"

// Generate Metadata giữ nguyên như cũ
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params
  const category = await client.fetch(CATEGORY_QUERY, { slug })

  if (!category) return { title: "Not Found" }

  return {
    title: category.seoTitle || category.title,
    description: category.seoDescription || category.description,
  }
}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: Promise<{ category: string }>,
  searchParams: Promise<{ page?: string }>
}) {
  const { category: slug } = await params
  const { page } = await searchParams
  
  // Logic tính toán phân trang
  const currentPage = Number(page) || 1
  const pageSize = 12 // Số sản phẩm mỗi trang
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

  // Fetch dữ liệu song song để nhanh hơn
  const [category, products, totalProducts] = await Promise.all([
    client.fetch(CATEGORY_QUERY, { slug }),
    client.fetch(PRODUCTS_BY_CATEGORY_QUERY, { slug, start, end }),
    client.fetch(PRODUCTS_COUNT_QUERY, { slug })
  ])

  if (!category) {
    notFound()
  }

  const totalPages = Math.ceil(totalProducts / pageSize)

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryClient
        category={category}
        products={products}
      />
      
      {/* Component Phân trang */}
      <AppPagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        baseUrl={`/products/${slug}`} 
      />
    </div>
  )
}