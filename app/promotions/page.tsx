import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { PROMO_PRODUCTS_QUERY } from "@/sanity/lib/queries"

export const revalidate = 60

export const metadata = {
  title: "Khuyến mãi đặc sản Tây Ninh",
  description:
    "Các sản phẩm bánh tráng, muối tôm và đặc sản Tây Ninh đang được giảm giá tại Bánh Tráng Quý Nhân.",
}

export default async function PromotionsPage() {
  const promotionProducts = await client.fetch(PROMO_PRODUCTS_QUERY)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* KHỐI CSS TẠO HIỆU ỨNG ĐỔI MÀU CHO NHÃN GIẢM GIÁ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes promoGlow {
          0% { background-color: #dc2626; box-shadow: 0 0 10px rgba(220, 38, 38, 0.6); }
          50% { background-color: #ea580c; box-shadow: 0 0 25px rgba(234, 88, 12, 0.9); }
          100% { background-color: #dc2626; box-shadow: 0 0 10px rgba(220, 38, 38, 0.6); }
        }
        .badge-glow {
          animation: promoGlow 1.5s infinite ease-in-out;
        }
      `}} />

      {/* 1. HERO BANNER */}
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
            <h1 className="text-4xl md:text-5xl font-bold mt-5">
              Khuyến Mãi Đặc Sản Tây Ninh
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Giảm giá đến 25% cho bánh tráng, muối tôm và đặc sản Tây Ninh.
            </p>
            <div className="mt-6">
              <span className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold">
                {promotionProducts?.length || 0} sản phẩm đang giảm giá
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COUPON / INFO */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-none text-gray-800 dark:text-white font-medium">
          🚚 Miễn phí vận chuyển
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-none text-gray-800 dark:text-white font-medium">
          🎁 Quà tặng khi mua combo
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-none text-gray-800 dark:text-white font-medium">
          🔥 Giảm đến 25%
        </div>
      </div>

      {/* 3. DANH SÁCH SẢN PHẨM KHUYẾN MÃI */}
      {promotionProducts && promotionProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {promotionProducts.map((product: any) => (
            <Link key={product._id} href={`/products/detail/${product.slug}`}>
              <div
                className="
                  bg-gray-50 dark:bg-[#161a2b] 
                  border border-gray-200 dark:border-slate-800 
                  rounded-2xl 
                  p-3 md:p-4
                  flex flex-col 
                  h-full 
                  hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]
                  hover:-translate-y-1 
                  transition-all 
                  duration-300
                "
              >
                {/* Khu vực Hình ảnh */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3 md:mb-4 bg-white border border-gray-100 dark:border-slate-700/50">
                  <img
                    src={product.image || "/placeholder-product.jpg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* ĐÃ SỬA: Nhãn giảm giá to, góc cạnh giống ảnh và có hiệu ứng đổi màu */}
                  {product.discount > 0 && (
                    <span className="badge-glow absolute top-0 right-0 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-bl-2xl rounded-tr-xl text-base md:text-xl font-black z-10 shadow-lg border-l-2 border-b-2 border-white/20">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                
                {/* Khu vực Text */}
                <div className="flex flex-col flex-1 justify-between">
                  <h2 className="text-gray-900 dark:text-white font-bold text-sm md:text-lg line-clamp-2 leading-snug mb-3">
                    {product.name}
                  </h2>

                  <div className="text-red-600 dark:text-[#ff3333] font-bold text-lg md:text-xl">
                    {product.price?.toLocaleString("vi-VN") || "0"}đ
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 dark:bg-slate-800 rounded-3xl shadow-sm border border-gray-200 dark:border-none">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Chưa có chương trình khuyến mãi</h2>
          <p className="text-gray-500 dark:text-gray-400">Hiện tại chưa có sản phẩm nào đang giảm giá. Bạn quay lại sau nhé!</p>
        </div>
      )}
    </div>
  )
}
