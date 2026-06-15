export const PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,

  "image": image.asset->url,

  price,
  originalPrice,
  discount,

  stock,
  unit,

  description,
  details,

  ingredients,
  usage,
  storage,
  origin,

  category,

  shopee,
  tiktok,
  lazada,

  trending,
  bestseller,
  isNew
}`
export const PROMOTION_PRODUCTS_QUERY = `
*[_type == "product" && discount > 0]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price,
  originalPrice,
  discount,
  stock,
  description
}
`
export const FEATURED_POST_QUERY = `
*[_type == "post" && isFeatured == true][0]{
  _id,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  excerpt,
  date
}
`
export const POSTS_QUERY = `
*[_type == "post" && isFeatured != true] | order(date desc){
  _id,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  excerpt,
  date
}
`
export const POST_DETAIL_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  "alt": mainImage.alt,
  excerpt,
  content,
  publishedAt,
  isFeatured
}
`