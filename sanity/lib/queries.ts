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
  "image": mainImage.asset->url,
  excerpt,
  publishedAt
}
`
export const POSTS_QUERY = `
*[_type == "post" && isFeatured != true] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  excerpt,
  publishedAt
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
export const BESTSELLER_PRODUCTS_QUERY = `
*[_type == "product" && bestseller == true]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price
}
`
export const FEATURED_PRODUCTS_QUERY = `
*[_type == "product" && featured == true]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price
}
`
export const HOMEPAGE_POSTS_QUERY = `
*[_type == "post"][0...6]{
  title,
  "slug": slug.current,
  "image": mainImage.asset->url
}
`
export const TRENDING_PRODUCTS_QUERY = `
*[_type == "product" && trending == true]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price
}
`
export const HOME_POSTS_QUERY = `
*[_type == "post"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  excerpt
}
`
export const HOME_EXPLORE_QUERY = `
*[_type == "post" && showOnHome == true] | order(publishedAt desc){

  _id,

  title,

  "slug": slug.current,

  "image": mainImage.asset->url

}
`


export const NEW_PRODUCTS_QUERY = `
*[_type == "product" && isNew == true]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price,
  originalPrice,
  discount
}
`