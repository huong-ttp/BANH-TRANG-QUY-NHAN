export const PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,

  "image": image.asset->url,
category->{
    title,
    "slug": slug.current
  },
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

  

  shopee,
  tiktok,
  lazada,

  trending,
  bestseller,
  isNew
}`
export const PRODUCT_DETAIL_QUERY = `
*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,

  "image": image.asset->url,

  "images": images[]{
    asset->{
      url
    }
  },

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

  category->{
    title,
    "slug": slug.current
  },

  shopee,
  tiktok,

  trending,
  bestseller,
  isNew
}
`
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
export const FEATURED_PRODUCTS_QUERY = `
*[_type == "product" && featured == true]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price
}
`
export const TRENDING_PRODUCTS_QUERY = `
*[_type == "product" && trending == true]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,

  price,
  originalPrice,
  discount,

  stock,
  description,

  trending,
  isNew
}
`
export const HOMEPAGE_POSTS_QUERY = `
*[_type == "post"][0...6]{
  title,
  "slug": slug.current,
  "image": mainImage.asset->url
}
`
export const BESTSELLER_PRODUCTS_QUERY = `
*[_type == "product" && bestseller == true][0...3]{
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
export const HOME_BANNER_QUERY = `
*[_type == "homeBanner"][0]{
  title,
  subtitle,

  "image": image.asset->url,

  buttonText,
  buttonLink,

  button2Text,
  button2Link
}
`
export const SITE_SETTINGS_QUERY = `
*[_type == "siteSettings"][0]{
  companyName,
  phone,
  email,
  address,
  facebook,
  tiktok,
  shopee,
  zalo,
  messenger,
  hotline1,
  hotline2,
  hotline3,
  officeAddress,
  warehouseAddress,
  warehouseAddress2
}
`
export const ABOUT_PAGE_QUERY = `
*[_type == "aboutPage"][0]{
  heroTitle,
  heroDescription,

  "heroImage": heroImage.asset->url,

  aboutTitle,
  "aboutImage": aboutImage.asset->url,
  aboutContent,

  ownerName,
  ownerPosition,
  ownerStory,
  ownerQuote,
  "ownerImage": ownerImage.asset->url,

  stats,

  brandOriginTitle,
  brandOriginContent,
  brandOriginButtonText,
  brandOriginButtonLink,
  "brandOriginImage": brandOriginImage.asset->url,

  featuredProducts[]->{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price
},
  storyTitle,
storySubtitle,

storySections[]{
  heading,
  content
},

coreValues[]{
  icon,
  title,
  description
},
visionSection{
  visionTitle,
  visionParagraphs,
  commitmentTitle,
  commitments,
  closingText
},
}
`
export const CATEGORY_QUERY = `
*[_type == "category" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  description
}
`
export const PRODUCTS_BY_CATEGORY_QUERY = `
*[
  _type == "product" &&
  category->slug.current == $slug
] | order(_createdAt desc) [$start...$end]{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  price,
  "category": category->{
    title,
    "slug": slug.current
  }
}
`
export const CATEGORIES_QUERY = `
*[_type == "category"] | order(title asc){
  _id,
  title,
  "slug": slug.current
}
`
// Lấy sản phẩm có giới hạn (start...end) cho từng trang
export const PAGINATED_PRODUCTS_QUERY = `
  *[_type == "product" && category->slug.current == $slug] | order(_createdAt desc) [$start...$end]{
    _id, name, "slug": slug.current, "image": image.asset->url, price, discount
  }
`;

// Đếm tổng số sản phẩm để tính toán số trang
export const PRODUCTS_COUNT_QUERY = `
  count(*[_type == "product" && category->slug.current == $slug])
`;
export const PAGINATED_ALL_PRODUCTS_QUERY = `
  *[_type == "product"] | order(_createdAt desc) [$start...$end]{
    _id, name, "slug": slug.current, "image": image.asset->url, price, originalPrice, discount, stock, unit
  }
`;

export const ALL_PRODUCTS_COUNT_QUERY = `count(*[_type == "product"])`;