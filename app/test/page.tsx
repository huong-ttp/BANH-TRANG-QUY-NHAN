import { client } from "@/sanity/lib/client"
import { PRODUCTS_QUERY } from "@/sanity/lib/queries"

export default async function TestPage() {
  const products = await client.fetch(PRODUCTS_QUERY)

  return (
    <div>
      {products.map((p: any) => (
        <div key={p._id}>
          {p.name}
        </div>
      ))}
    </div>
  )
}