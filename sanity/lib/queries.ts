export const PRODUCTS_QUERY = `
*[_type == "product"]{
  _id,
  name,
  price,
  stock,
  description
}
`