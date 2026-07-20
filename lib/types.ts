export interface Product {
  _id: string
  slug: string

  name: string

  description: string

  details: string
  ingredients: string
  usage: string
  storage: string
  origin: string

  price?: number
  originalPrice: number

  image: string

  category: string

  stock: number
  unit: string

  discount: number

  trending: boolean
  bestseller: boolean
  isNew?: boolean

  shopee: string
  tiktok: string
  lazada: string
}

export interface Category {
  id: string
  name: string
  image: string
  slug: string
}
export interface NewsPost {
  id: string
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  content: string
  metaDescription?: string
  keywords?: string[]
}