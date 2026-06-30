import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { Metadata } from "next"
import { Suspense } from "react"
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
  
  const currentPage = Number(page) || 1
  const pageSize = 12 
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

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
      
      {/* 2. Bọc AppPagination trong Suspense để hết lỗi */}
      <Suspense fallback={<div className="text-center py-4">Đang tải phân trang...</div>}>
        <AppPagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          baseUrl={`/products/${slug}`} 
        />
      </Suspense>
    </div>
  )
}