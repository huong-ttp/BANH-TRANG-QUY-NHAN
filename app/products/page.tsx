import { client } from "@/sanity/lib/client"
import { Metadata } from "next"
import {
  PRODUCTS_QUERY,
  CATEGORIES_QUERY,
} from "@/sanity/lib/queries"

import ProductsClient from "./products-client"

export const metadata: Metadata = {
  title: "Tất cả sản phẩm | Đặc Sản Bánh Tráng Tây Ninh Chính Gốc",
  description: "Khám phá danh sách các loại bánh tráng phơi sương, bánh tráng trộn, muối tôm và đặc sản Tây Ninh thơm ngon nhất tại Bánh Tráng Quý Nhân.",
  keywords: ["bánh tráng tây ninh", "muối tôm tây ninh", "đặc sản tây ninh", "đồ ăn vặt", "bánh tráng phơi sương"],
}

export default async function ProductsPage() {
  const products = await client.fetch(PRODUCTS_QUERY)
  const categories = await client.fetch(CATEGORIES_QUERY)

  return (
    <ProductsClient
      products={products}
      categories={categories}
    />
  )
}