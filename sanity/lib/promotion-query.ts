export const PROMOTIONS_QUERY = `
*[_type == "promotion"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description,
  discount,
  startDate,
  endDate,
  active
}
`