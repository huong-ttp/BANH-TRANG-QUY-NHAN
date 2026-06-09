import Link from "next/link"
import { UtensilsCrossed, Package, Landmark, Mountain, HeartHandshake, ShoppingBag, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"
import { FeaturedSection } from "@/components/featured-section"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Bánh Tráng Quý Nhân | Đặc sản Tây Ninh chính gốc",
  description:
    "Bánh tráng Tây Ninh, muối chấm và đặc sản địa phương chính gốc từ Bánh Tráng Quý Nhân.",
}
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-50 via-amber-50 to-red-50 dark:from-red-950 dark:to-orange-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-in slide-in-from-left duration-700 -mt-8 lg:-mt-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-red-700 dark:text-red-200">
                  Đặc Sản Bánh Tráng Tây Ninh Chính Gốc
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                  Bánh tráng, muối tôm và đặc sản Tây Ninh giao tận nơi trên toàn quốc.
                </p>
              </div>
              <div className="flex flex-row flex-wrap justify-center gap-3">
                <Link href="/products">
                  <Button
                    size="lg"
                     className="bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90"
                  >
                    Mua ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-red-50 dark:hover:bg-red-950 transition-colors duration-200"
                  >
                    Xem Sản Phẩm
                  </Button>
                </Link>
              </div>
              {/* Sản phẩm bán chạy */}
<div className="mt-8">
  <div className="flex items-center gap-2 mb-4">
    <span className="text-xl">🔥</span>
    <h3 className="font-bold text-lg text-red-700 dark:text-red-300">
      Sản phẩm bán chạy
    </h3>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[700px]">

    {/* SP 1 */}
    <Link href="/products">
      <div className="bg-white/80 dark:bg-gray-900 border rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
        <img
          src="/sp-bantrangmuoi.jpg"
          alt="Bánh Tráng Muối"
          className="w-full h-24 object-cover rounded-lg mb-3"
        />

        <h4 className="font-semibold text-sm">
          Bánh Tráng Muối
        </h4>

        <p className="text-yellow-500 text-sm">
          ⭐⭐⭐⭐⭐
        </p>

        <p className="font-bold text-red-600">
          89.000đ
        </p>
      </div>
    </Link>

    {/* SP 2 */}
    <Link href="/products">
      <div className="bg-white/80 dark:bg-gray-900 border rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
        <img
          src="/muoitom.jpg"
          alt="Muối Tôm Tây Ninh"
          className="w-full h-24 object-cover rounded-lg mb-3"
        />

        <h4 className="font-semibold text-sm">
          Muối Tôm Tây Ninh
        </h4>

        <p className="text-yellow-500 text-sm">
          ⭐⭐⭐⭐⭐
        </p>

        <p className="font-bold text-red-600">
          45.000đ
        </p>
      </div>
    </Link>

    {/* SP 3 */}
    <Link href="/products">
      <div className="bg-white/80 dark:bg-gray-900 border rounded-xl p-4 hover:shadow-lg transition-all hover:-translate-y-1">
        <img
          src="/phoisuong.jpg"
          alt="Bánh Tráng Phơi Sương"
          className="w-full h-24 object-cover rounded-lg mb-3"
        />

        <h4 className="font-semibold text-sm">
          Bánh Tráng Phơi Sương
        </h4>

        <p className="text-yellow-500 text-sm">
          ⭐⭐⭐⭐⭐
        </p>

        <p className="font-bold text-red-600">
          79.000đ
        </p>
      </div>
    </Link>

  </div>
</div>
            </div>
            <div className="flex justify-center animate-in slide-in-from-right duration-700">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-500 opacity-20 rounded-xl"></div>
                <img
                  src="Banner-BanhTrangTayNinh.jpg"
                  alt="Bánh tráng Tây Ninh"
                  className="object-cover w-full h-full rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-700 dark:text-red-200">
                Khám Phá Tây Ninh Qua Từng Hương Vị
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Không chỉ bán đặc sản, Bánh Tráng Quý Nhân mong muốn lan tỏa
                văn hóa, con người và những hương vị đặc trưng của quê hương Tây Ninh
                đến với khách hàng trên khắp cả nước.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-red-500 group">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors duration-300">
                <UtensilsCrossed className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                Hương Vị Tây Ninh
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Những sản phẩm mang đậm hương vị Tây Ninh như bánh tráng, muối tôm và các món ăn vặt nổi tiếng.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-red-500 group">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors duration-300">
                <Package className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                Đặc Sản Quê Nhà 
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Tuyển chọn các sản phẩm chất lượng từ những cơ sở sản xuất uy tín tại Tây Ninh.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-red-500 group">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors duration-300">
                <Landmark className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                Văn Hóa Địa Phương 
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Giới thiệu nét đẹp văn hóa, con người và truyền thống của vùng đất Tây Ninh.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-red-500 group">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors duration-300">
                <Mountain className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                Núi Bà Đen
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Biểu tượng du lịch nổi tiếng của Tây Ninh, thu hút hàng triệu du khách mỗi năm.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-red-500 group">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors duration-300">
                <HeartHandshake className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                Lan Tỏa Quê Hương
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
              Mang những giá trị quê hương đến gần hơn với khách hàng trên khắp cả nước.              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-red-500 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-red-500 group">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors duration-300">
                <ShoppingBag className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                Mua Hàng Thuận Tiện
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Dễ dàng tìm mua sản phẩm qua Shopee, TikTok Shop và các kênh chính thức.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-red-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-red-700 dark:text-red-200">
                Khám Phá Tây Ninh
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Từ đặc sản nổi tiếng đến những địa danh mang đậm dấu ấn quê hương.              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            <CategoryCard
              name="Núi Bà Đen"
              image="NuiBaDen.jpg"
              href="/news/nui-ba-den"
            />
            <CategoryCard
              name="Tòa Thánh Tây Ninh"
              image="ToaThanhTayNinh.jpg"
              href="/news/toa-thanh-cao-dai"
            />
            <CategoryCard
              name="Hồ Dầu Tiếng"
              image="HoDauTieng.jpg"
              href="/news/ho-dau-tieng"
            />
            <CategoryCard
              name="Bánh Tráng Tây Ninh"
              image="BanhTrangTayNinh.jpg"
              href="/news/banh-trang-tay-ninh"
            />
            <CategoryCard
              name="Muối Tôm Tây Ninh"
              image="MuoiTomTayNinh.jpg"
              href="/news/muoi-tom-tay-ninh"
            />
            <CategoryCard
              name="Ẩm Thực Tây Ninh"
              image="AmThucTayNinh.jpg"
              href="/news/am-thuc-tay-ninh"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 dark:from-red-800 dark:to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2 animate-in fade-in duration-700">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Khám Phá Hương Vị Tây Ninh Chính Gốc
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Từ những bịch bánh tráng quen thuộc đến các loại muối chấm đặc trưng, Bánh Tráng Quý Nhân mong muốn lan tỏa hương vị quê hương Tây Ninh đến mọi miền đất nước.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-in fade-in duration-1000">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Khám Phá Đặc Sản
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-red-600 border-white hover:bg-red-700 transition-colors duration-200"
                >
                  Về Quý Nhân
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
