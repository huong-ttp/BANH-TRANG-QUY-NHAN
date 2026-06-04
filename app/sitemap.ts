import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://banhtrangquynhan.vn",
      lastModified: new Date(),
    },
    {
      url: "https://banhtrangquynhan.vn/products",
      lastModified: new Date(),
    },
    {
      url: "https://banhtrangquynhan.vn/about",
      lastModified: new Date(),
    },
    {
      url: "https://banhtrangquynhan.vn/news",
      lastModified: new Date(),
    },
    {
      url: "https://banhtrangquynhan.vn/contact",
      lastModified: new Date(),
    },
  ]
}