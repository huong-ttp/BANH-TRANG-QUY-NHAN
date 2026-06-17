import { client } from "@/sanity/lib/client"
import {
  PRODUCTS_QUERY,
  CATEGORIES_QUERY,
} from "@/sanity/lib/queries"

import ProductsClient from "./products-client"

export default async function ProductsPage() {

  const products =
    await client.fetch(PRODUCTS_QUERY)

  const categories =
    await client.fetch(CATEGORIES_QUERY)

  return (
    <ProductsClient
      products={products}
      categories={categories}
    />
  )
}