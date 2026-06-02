import type { Product, User, Category } from "./types"

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Bánh Tráng",
    image: "/categories/banhtrang.jpg",
    slug: "banh-trang",
  },
  {
    id: "cat2",
    name: "Muối Chấm",
    image: "/categories/muoicham.jpg",
    slug: "muoi-cham",
  },
  {
    id: "cat3",
    name: "Đồ Ăn Vặt",
    image: "/categories/anvat.jpg",
    slug: "do-an-vat",
  },
  {
    id: "cat4",
    name: "Combo Đặc Sản",
    image: "/categories/combo.jpg",
    slug: "combo-dac-san",
  },
]

export const featuredProducts: Product[] = [
 {
  id: "prod1",
  name: "Bánh Tráng Muối Nhuyễn",

  description:
    "Bánh tráng Tây Ninh trộn cùng muối nhuyễn đậm đà.",

  details:
    "Bánh tráng muối nhuyễn là món ăn vặt nổi tiếng của Tây Ninh với vị mặn ngọt hài hòa, thơm mùi tỏi và đậm đà hương vị quê hương.",

  ingredients:
    "Bánh tráng, muối nhuyễn, tỏi phi, hành phi, sa tế.",

  usage:
    "Dùng trực tiếp sau khi mở bao bì.",

  storage:
    "Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp.",

  origin:
    "Tây Ninh, Việt Nam",

  price: 35000,
  originalPrice: 45000,
  discount: 22,

  image: "/products/banhtrang-muoinhuyen.jpg",

  category: "banh-trang",

  trending: true,
  bestseller: true,

  stock: 100,
  unit: "bịch",

  shopee: "https://shopee.vn/...",
  tiktok: "https://tiktok.com/...",
  lazada: "https://lazada.vn/..."
},

  {
  id: "prod2",
  name: "Bánh Tráng Tỏi",

  description: "Bánh tráng phơi sương kết hợp tỏi phi thơm ngon.",

  details:
    "Bánh tráng tỏi được chế biến từ bánh tráng Tây Ninh kết hợp cùng tỏi phi vàng thơm, mang đến hương vị đậm đà khó quên.",

  ingredients:
    "Bánh tráng, tỏi phi, dầu ăn, gia vị.",

  usage:
    "Dùng trực tiếp sau khi mở bao bì.",

  storage:
    "Bảo quản nơi khô ráo, tránh ánh nắng.",

  origin:
    "Tây Ninh, Việt Nam",

  price: 40000,
  originalPrice: 50000,
  discount: 20,

  image: "/products/banhtrang-toi.jpg",

  category: "banh-trang",

  trending: true,

  stock: 80,
  unit: "bịch",

  shopee: "https://shopee.vn/",
  tiktok: "https://www.tiktok.com/",
  lazada: "https://www.lazada.vn/"
},

  {
  id: "prod3",
  name: "Bánh Tráng Sa Tế",

  description:
    "Vị cay nồng hấp dẫn, phù hợp cho tín đồ ăn cay.",

  details:
    "Bánh tráng sa tế là món ăn vặt được yêu thích bởi vị cay đặc trưng kết hợp cùng độ dai mềm của bánh tráng.",

  ingredients:
    "Bánh tráng, sa tế, tỏi, hành phi, gia vị.",

  usage:
    "Ăn trực tiếp.",

  storage:
    "Để nơi thoáng mát.",

  origin:
    "Tây Ninh, Việt Nam",

  price: 45000,
  originalPrice: 55000,
  discount: 18,

  image: "/products/banhtrang-sate.jpg",

  category: "banh-trang",

  bestseller: true,

  stock: 70,
  unit: "bịch",

  shopee: "https://shopee.vn/",
  tiktok: "https://www.tiktok.com/",
  lazada: "https://www.lazada.vn/"
},

  {
  id: "prod4",
  name: "Muối Tôm Tây Ninh",

  description:
    "Muối tôm chính gốc Tây Ninh dùng chấm trái cây.",

  details:
    "Muối tôm Tây Ninh là đặc sản nổi tiếng với vị mặn, ngọt, cay hài hòa, thích hợp dùng cùng trái cây và bánh tráng.",

  ingredients:
    "Muối, tôm khô, ớt, tỏi.",

  usage:
    "Dùng làm gia vị chấm.",

  storage:
    "Đậy kín nắp sau khi sử dụng.",

  origin:
    "Tây Ninh, Việt Nam",

  price: 25000,
  originalPrice: 30000,
  discount: 17,

  image: "/products/muoitom.jpg",

  category: "muoi-cham",

  stock: 150,
  unit: "hũ",

  shopee: "https://shopee.vn/",
  tiktok: "https://www.tiktok.com/",
  lazada: "https://www.lazada.vn/"
},

  {
  id: "prod5",
  name: "Muối Ớt Xanh",

  description:
    "Muối chấm hải sản và trái cây cực ngon.",

  details:
    "Muối ớt xanh có vị cay nhẹ và hương thơm đặc trưng, phù hợp chấm hải sản, trái cây và các món nướng.",

  ingredients:
    "Ớt xanh, muối, đường, chanh.",

  usage:
    "Dùng trực tiếp làm nước chấm.",

  storage:
    "Bảo quản ngăn mát sau khi mở nắp.",

  origin:
    "Việt Nam",

  price: 30000,
  originalPrice: 40000,
  discount: 25,

  image: "/products/muoiotxanh.jpg",

  category: "muoi-cham",

  stock: 90,
  unit: "hũ",

  shopee: "https://shopee.vn/",
  tiktok: "https://www.tiktok.com/",
  lazada: "https://www.lazada.vn/"
},

  {
  id: "prod6",
  name: "Khô Gà Lá Chanh",

  description:
    "Khô gà cay nhẹ, thơm mùi lá chanh.",

  details:
    "Khô gà lá chanh được chế biến từ thịt gà xé sợi kết hợp lá chanh tạo nên hương vị hấp dẫn.",

  ingredients:
    "Thịt gà, lá chanh, ớt, gia vị.",

  usage:
    "Dùng trực tiếp.",

  storage:
    "Đậy kín sau khi mở.",

  origin:
    "Việt Nam",

  price: 65000,
  originalPrice: 80000,
  discount: 19,

  image: "/products/khoga.jpg",

  category: "do-an-vat",

  new: true,

  stock: 60,
  unit: "hộp",

  shopee: "https://shopee.vn/",
  tiktok: "https://www.tiktok.com/",
  lazada: "https://www.lazada.vn/"
},

  {
  id: "prod7",
  name: "Combo Đặc Sản Tây Ninh",

  description:
    "Combo bánh tráng, muối tôm và đồ ăn vặt.",

  details:
    "Combo đặc sản giúp khách hàng trải nghiệm nhiều hương vị nổi tiếng của Tây Ninh trong cùng một sản phẩm.",

  ingredients:
    "Bánh tráng, muối tôm, đồ ăn vặt các loại.",

  usage:
    "Dùng trực tiếp.",

  storage:
    "Bảo quản nơi khô ráo.",

  origin:
    "Tây Ninh, Việt Nam",

  price: 149000,
  originalPrice: 179000,
  discount: 17,

  image: "/products/combo-tayninh.jpg",

  category: "combo-dac-san",

  trending: true,
  bestseller: true,

  stock: 30,
  unit: "combo",

  shopee: "https://shopee.vn/",
  tiktok: "https://www.tiktok.com/",
  lazada: "https://www.lazada.vn/"
},

  {
  id: "prod8",
  name: "Bánh Tráng Phơi Sương",

  description:
    "Đặc sản nổi tiếng Tây Ninh, mềm dẻo tự nhiên.",

  details:
    "Bánh tráng phơi sương là một trong những đặc sản nổi tiếng nhất Tây Ninh với độ mềm dẻo đặc trưng.",

  ingredients:
    "Gạo, muối.",

  usage:
    "Dùng cuốn rau, thịt hoặc ăn trực tiếp.",

  storage:
    "Bảo quản nơi khô ráo.",

  origin:
    "Tây Ninh, Việt Nam",

  price: 55000,
  originalPrice: 65000,
  discount: 15,

  image: "/products/phoisuong.jpg",

  category: "banh-trang",

  new: true,

  stock: 50,
  unit: "bịch",

  shopee: "https://shopee.vn/",
  tiktok: "https://www.tiktok.com/",
  lazada: "https://www.lazada.vn/"
},
]
export function getProductById(id: string) {
  return featuredProducts.find((product) => product.id === id)
}