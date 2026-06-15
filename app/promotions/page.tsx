
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { PROMOTION_PRODUCTS_QUERY } from "@/sanity/lib/queries"


export const metadata = {
  title: "Khuyến mãi đặc sản Tây Ninh",
  description:
    "Các sản phẩm bánh tráng, muối tôm và đặc sản Tây Ninh đang được giảm giá tại Bánh Tráng Quý Nhân.",
}

export default async function PromotionsPage() {
  const promotionProducts = await client.fetch(PROMOTION_PRODUCTS_QUERY)

  return (
    <div>
    <section className="relative overflow-hidden rounded-3xl mb-12">

  <img
    src="/banner-banhtrang.jpg"
    alt="Khuyến mãi đặc sản Tây Ninh"
    className="w-full h-[420px] object-cover"
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute inset-0 flex items-center">

    <div className="px-10 md:px-16 text-white">

      <div className="inline-block bg-red-600 px-4 py-2 rounded-full font-semibold">
        🔥 FLASH SALE
      </div>

      <h1 className="text-5xl font-bold mt-5">
        Khuyến Mãi Đặc Sản Tây Ninh
      </h1>

      <p className="mt-4 text-xl max-w-2xl">
        Giảm giá đến 25% cho bánh tráng,
        muối tôm và đặc sản Tây Ninh.
      </p>

      <div className="mt-6">
        <span className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold">
          {promotionProducts?.length || 0} sản phẩm đang giảm giá
        </span>
      </div>

    </div>

  </div>

</section>
<div className="grid md:grid-cols-3 gap-6 mb-12">

  <div className=" bg-white dark:bg-slate-800 rounded-2xl p-6 shadow text-gray-800 dark:text-white " >
    🚚 Miễn phí vận chuyển
  </div>

  <div className=" bg-white dark:bg-slate-800 rounded-2xl p-6 shadow text-gray-800 dark:text-white " >
    🎁 Quà tặng khi mua combo
  </div>

  <div className=" bg-white dark:bg-slate-800 rounded-2xl p-6 shadow text-gray-800 dark:text-white " >
    🔥 Giảm đến 25%
  </div>

</div>


            <div className="grid md:grid-cols-3 gap-6">
        {promotionProducts.map((product: any) => (
          <Link
            key={product._id}
            href={`/products/detail/${product.slug}`}
          >
            <div
            className="
            bg-white
            dark:bg-slate-800
            rounded-2xl
            overflow-hidden
            border
            border-gray-200
            dark:border-slate-700
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-1
            transition-all
            duration-300
            "
            >

              <div className="relative">
                <img
                  src={product.image || "/placeholder-product.jpg"}
                  alt={product.name}
                  className="h-60 w-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold ">
                  -{product.discount}%
                </span>
              </div>
                            <div className="p-4">

                <h2 className="font-bold text-lg">
                  {product.name}
                </h2>

                <div className="mt-2">

                  <span className="text-red-600 font-bold text-xl">
                    {product.price?.toLocaleString()}đ
                  </span>

                  <span className="ml-3 text-gray-400 line-through">
                    {product.originalPrice?.toLocaleString()}đ
                  </span>
                <div className="mt-2 text-green-600 text-sm font-medium">
                Tiết kiệm{" "}
                {(product.originalPrice - product.price).toLocaleString()}đ
                </div>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
  {product.description}
</p>
<div className="mt-3 flex items-center gap-2">

  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
    HOT SALE
  </span>

  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
    Còn {product.stock}
  </span>

</div>
                </div>

              </div>
            </div>

            </Link>
        ))}
      </div>
      </div>
    
  )
}