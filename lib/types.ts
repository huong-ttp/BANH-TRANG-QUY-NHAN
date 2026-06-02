export interface Product {
  id: string
  name: string

  description: string

  details?: string
  ingredients?: string
  usage?: string
  storage?: string
  origin?: string

  price: number
  originalPrice: number

  image: string

  category: string

  stock: number
  unit: string

  discount: number

  trending?: boolean
  bestseller?: boolean
  new?: boolean

  shopee?: string
  tiktok?: string
  lazada?: string
}

export interface Category {
  id: string
  name: string
  image: string
  slug: string
}