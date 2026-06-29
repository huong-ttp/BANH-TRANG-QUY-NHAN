import { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://banh-trang-quy-nhan.vercel.app"

  const categories = await client.fetch(
    `*[_type == "category"]{ "slug": slug.current }`
  )

  const products = await client.fetch(
    `*[_type == "product"]{ "slug": slug.current }`
  )

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    ...categories.map((c: any) => ({
      url: `${baseUrl}/products/${c.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),

    ...products.map((p: any) => ({
      url: `${baseUrl}/products/detail/${p.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ]
}