import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { Metadata } from "next"
import {
  CATEGORY_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries"

import CategoryClient from "./category-client"
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { category: slug } = await params

  const category = await client.fetch(CATEGORY_QUERY, { slug })

  if (!category) {
    return { title: "Not Found" }
  }

  return {
    title: category.seoTitle || category.title,
    description: category.seoDescription || category.description,

    keywords: category.seoKeywords || [],

    openGraph: {
      title: category.title,
      description: category.description,
    },
  }
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {

  const { category: slug } = await params

  const category = await client.fetch(
    CATEGORY_QUERY,
    { slug }
  )

  if (!category) {
    notFound()
  }

  const products = await client.fetch(
    PRODUCTS_BY_CATEGORY_QUERY,
    { slug }
  )

  return (
    <CategoryClient
      category={category}
      products={products}
    />
  )
}