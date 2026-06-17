import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { featuredProducts } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import HistoryTimeline from "@/components/history-timeline"
import { client } from "@/sanity/lib/client"
import { ABOUT_PAGE_QUERY,  FEATURED_PRODUCTS_QUERY } from "@/sanity/lib/queries"
export const metadata = {
  title: "Giới thiệu | Bánh Tráng Quý Nhân",
  description:
    "Câu chuyện hình thành và phát triển của cơ sở Bánh Tráng Quý Nhân tại Tây Ninh.",
}
export default async function AboutPage() {
 
  
  
const about = await client.fetch(
  ABOUT_PAGE_QUERY,
  {},
  { cache: "no-store" }
)
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-10">

        {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl h-[500px]">
  <img
    src={
      about?.heroImage
        ? urlFor(about.heroImage).url()
        : "/banner-about.jpg"
    }
    alt={about?.heroTitle}
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex h-full items-center justify-center">
    <div className="text-center text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold">
        {about?.heroTitle}
      </h1>

      <p className="mt-4 max-w-2xl mx-auto text-lg">
        {about?.heroDescription}
      </p>
    </div>
  </div>
</section>

        {/* GIỚI THIỆU */}
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>
                <img
                src={
                  about?.aboutImage
                    ? urlFor(about.aboutImage).url()
                    : "/about.jpg"
                }
                alt="Giới thiệu"
                className="w-full rounded-xl object-cover"
              />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {about?.aboutTitle}
                </h2>

                {about?.aboutContent?.map(
                (item: string, index: number) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-7 mt-4"
                  >
                    {item}
                  </p>
                )
              )}
              </div>

            </div>
          </CardContent>
        </Card>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border p-8 mt-12">
  <div className="flex flex-col md:flex-row gap-10">

  {/* Cột trái */}
  <div className="w-full md:w-[320px] text-center flex-shrink-0">

    <img
  src={
    about?.ownerImage
      ? urlFor(about.ownerImage).url()
      : "/ChuDoanhNghiep.jpg"
  }
  alt="Chủ doanh nghiệp"
  className="
    w-80
    h-80
    mx-auto
    object-cover
    rounded-[120px]
    border-4
    border-orange-200
  "
/>

    <h3 className="mt-6 text-3xl font-bold">
      {about?.ownerName}
    </h3>

    <p className="mt-2 text-orange-600 font-medium">
      {about?.ownerPosition}
    </p>

    <p className="text-orange-600">
      Bánh Tráng Quý Nhân
    </p>

  </div>


      <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {about?.ownerStory?.map(
  (item: string, index: number) => (
    <p key={index}>
      {item}
    </p>
  )
)}
        {about?.ownerQuote}

      </div>
    </div>

  </div>
</div>
        {/* CÂU CHUYỆN THƯƠNG HIỆU */}
<Card>
  <CardHeader>
    <CardTitle className="text-3xl">
      Câu Chuyện Của Quý Nhân
    </CardTitle>

    <CardDescription>
      Mang hương vị đặc sản Tây Ninh đến gần hơn với mọi người
    </CardDescription>
  </CardHeader>

  <CardContent className="space-y-10">

    {/* Giới thiệu */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-emerald-600">
        Bánh Tráng Quý Nhân – Mang Hương Vị Tây Ninh Đến Gần Hơn Với Mọi Người
      </h3>

      <p className="text-muted-foreground leading-8">
        Tây Ninh không chỉ nổi tiếng với Núi Bà Đen, Tòa Thánh Cao Đài hay
        những cánh đồng trải dài dưới nắng. Nơi đây còn được biết đến là quê
        hương của những món đặc sản đã trở thành niềm tự hào của người dân địa
        phương, trong đó có bánh tráng và muối Tây Ninh.
      </p>

      <p className="text-muted-foreground leading-8">
        Bánh Tráng Quý Nhân được hình thành từ tình yêu dành cho những hương vị
        quen thuộc của quê hương. Từ những chiếc bánh tráng giản dị gắn liền
        với bữa ăn gia đình đến những món ăn vặt được yêu thích trên khắp cả
        nước, mỗi sản phẩm đều mang theo câu chuyện về sự cần cù, sáng tạo và
        tinh thần gìn giữ giá trị truyền thống của người dân Tây Ninh.
      </p>

      <p className="text-muted-foreground leading-8">
        Chúng tôi tin rằng đặc sản không chỉ đơn thuần là một món ăn. Đó còn là
        cách để giới thiệu văn hóa, con người và những nét đẹp của vùng đất nơi
        sản phẩm được sinh ra. Chính vì vậy, Bánh Tráng Quý Nhân luôn nỗ lực
        lựa chọn nguyên liệu chất lượng, hoàn thiện quy trình sản xuất và không
        ngừng cải tiến sản phẩm để mang đến những hương vị đặc trưng nhất của
        Tây Ninh.
      </p>
    </div>

    {/* Sứ mệnh */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">
        Sứ Mệnh Của Bánh Tráng Quý Nhân
      </h3>

      <p className="text-muted-foreground leading-8">
        Bánh Tráng Quý Nhân ra đời với mong muốn góp phần lan tỏa giá trị của
        đặc sản Tây Ninh đến nhiều khách hàng hơn trên khắp cả nước.
      </p>

      <p className="text-muted-foreground leading-8">
        Mỗi sản phẩm được tạo ra không chỉ nhằm đáp ứng nhu cầu thưởng thức mà
        còn là cầu nối đưa hình ảnh quê hương Tây Ninh đến gần hơn với cộng
        đồng. Từ bánh tráng phơi sương truyền thống, bánh tráng ăn vặt đến các
        dòng muối đặc sản, tất cả đều được phát triển với mục tiêu giữ gìn
        hương vị đặc trưng vốn có của địa phương.
      </p>
    </div>

    {/* Giá trị cốt lõi */}
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">
        Giá Trị Mà Chúng Tôi Theo Đuổi
      </h3>

      <div className="grid gap-4 md:grid-cols-3">

        <div className="rounded-xl border p-6">
          <div className="text-3xl mb-3">🥢</div>

          <h4 className="font-semibold text-lg mb-2">
            Giữ Gìn Hương Vị Truyền Thống
          </h4>

          <p className="text-sm text-muted-foreground leading-7">
            Tôn trọng những giá trị đã được gìn giữ qua nhiều thế hệ, đồng thời
            chọn lọc và cải tiến để phù hợp hơn với nhu cầu hiện đại.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <div className="text-3xl mb-3">⭐</div>

          <h4 className="font-semibold text-lg mb-2">
            Chất Lượng Là Ưu Tiên Hàng Đầu
          </h4>

          <p className="text-sm text-muted-foreground leading-7">
            Từ nguyên liệu đầu vào đến quy trình đóng gói, mọi công đoạn đều
            được chú trọng nhằm đảm bảo sản phẩm đến tay khách hàng với chất
            lượng tốt nhất.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <div className="text-3xl mb-3">🌎</div>

          <h4 className="font-semibold text-lg mb-2">
            Lan Tỏa Đặc Sản Tây Ninh
          </h4>

          <p className="text-sm text-muted-foreground leading-7">
            Không chỉ bán sản phẩm, Bánh Tráng Quý Nhân mong muốn trở thành nơi
            giúp nhiều người hiểu hơn về văn hóa, ẩm thực và những giá trị đặc
            sắc của vùng đất Tây Ninh.
          </p>
        </div>

      </div>
    </div>

    {/* Tầm nhìn */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">
        Tầm Nhìn
      </h3>

      <p className="text-muted-foreground leading-8">
        Bánh Tráng Quý Nhân hướng đến việc trở thành thương hiệu đặc sản Tây
        Ninh được khách hàng tin tưởng lựa chọn khi tìm kiếm các sản phẩm bánh
        tráng, muối và đặc sản địa phương.
      </p>

      <p className="text-muted-foreground leading-8">
        Chúng tôi không ngừng hoàn thiện chất lượng sản phẩm, nâng cao trải
        nghiệm khách hàng và mở rộng hệ thống phân phối để nhiều người hơn có
        cơ hội thưởng thức hương vị đặc trưng của Tây Ninh.
      </p>
    </div>

    {/* Cam kết */}
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="text-2xl font-bold text-black mb-6">
        Cam Kết Của Chúng Tôi
      </h3>

      <div className="grid md:grid-cols-2 gap-4 text-black">

        <div>✓ Nguồn nguyên liệu được lựa chọn kỹ lưỡng</div>

        <div>✓ Sản phẩm đảm bảo chất lượng và an toàn thực phẩm</div>

        <div>✓ Hương vị đặc trưng của đặc sản Tây Ninh</div>

        <div>✓ Đóng gói cẩn thận, thuận tiện vận chuyển</div>

        <div className="md:col-span-2">
          ✓ Luôn lắng nghe và đồng hành cùng khách hàng
        </div>

      </div>
    </div>

    {/* Kết */}
    <div className="border-l-4 border-emerald-500 pl-6 py-2">
      <p className="italic text-muted-foreground leading-8">
        Bánh Tráng Quý Nhân tin rằng những giá trị bền vững luôn bắt đầu từ sự
        chân thành. Mỗi sản phẩm được gửi đi không chỉ mang theo hương vị của
        bánh tráng hay muối Tây Ninh, mà còn mang theo niềm tự hào về một vùng
        đất giàu bản sắc và nghĩa tình.
      </p>
    </div>

  </CardContent>
</Card>

        {/* THỐNG KÊ */}
        <section>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {about?.stats?.map(
      (item: any, index: number) => (
        <Card key={index}>
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-emerald-600">
              {item.value}
            </p>

            <p className="text-sm text-muted-foreground mt-2">
              {item.label}
            </p>
          </CardContent>
        </Card>
      )
    )}

  </div>
</section>

        {/* SẢN PHẨM NỔI BẬT */}
       <section className="mt-16">
  <h2 className="text-3xl font-bold mb-2">
    Sản phẩm nổi bật
  </h2>

  <p className="text-muted-foreground mb-6">
    Những sản phẩm được khách hàng yêu thích nhất
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {about?.featuredProducts?.map((product: any) => (
  <Link
    key={product._id}
    href={`/products/detail/${product.slug}`}
  >
    <div
      className="
      bg-white dark:bg-gray-900
      rounded-xl
      overflow-hidden
      border
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
      "
    >
      <img
        src={product.image}
        alt={product.name}
        className="
          w-full
          aspect-square
          object-cover
        "
      />

      <div className="p-4">
        <h3
          className="
          font-semibold
          line-clamp-2
          min-h-[48px]
          "
        >
          {product.name}
        </h3>

        <p
          className="
          text-red-600
          font-bold
          text-lg
          mt-2
          "
        >
          {product.price.toLocaleString("vi-VN")}đ
        </p>
      </div>
    </div>
  </Link>
))}

  </div>
</section>
        <div className="
max-w-5xl
mx-auto
my-12
bg-white
dark:bg-gray-900
border
rounded-2xl
shadow-sm
p-8
">

  <div className="text-center">

    <h2 className="text-3xl font-bold mb-4">
      {about?.brandOriginTitle}
    </h2>

    <p className="text-gray-600 dark:text-gray-400">
      {about?.brandOriginContent}
    </p>
    <div className="mt-9 flex justify-center">
  <img
    src="/nhubinh.jpg"
    alt="Bánh Tráng Quý Nhân"
    className="w-80 rounded-xl shadow-lg"
  />
</div>
    <a
      href={about?.brandOriginButtonLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
      inline-block
      mt-6
      bg-emerald-600
      hover:bg-emerald-700
      text-white
      px-6
      py-3
      rounded-lg
      font-semibold
      "
    >
      {about?.brandOriginButtonText}
    </a>

  </div>

</div>
        <HistoryTimeline />
        {/* VÌ SAO CHỌN */}
        <Card>
          <CardHeader>
            <CardTitle>Vì sao chọn Bánh Tráng Quý Nhân?</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">

              <div className="p-4 border rounded-lg">
                🌶 Đặc sản Tây Ninh chính gốc
              </div>

              <div className="p-4 border rounded-lg">
                ⭐ Chất lượng được tuyển chọn
              </div>

              <div className="p-4 border rounded-lg">
                🚚 Giao hàng toàn quốc
              </div>

              <div className="p-4 border rounded-lg">
                💚 Hương vị truyền thống
              </div>

            </div>
          </CardContent>
        </Card>
        
        {/* CTA */}
        <Card>
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold">
              Khám phá đặc sản Tây Ninh ngay hôm nay
            </h2>

            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Bánh tráng phơi sương, muối tôm Tây Ninh và nhiều sản phẩm
              hấp dẫn khác đang chờ bạn khám phá.
            </p>

            <Button asChild size="lg" className="mt-6">
              <Link href="/products">
                Xem sản phẩm
              </Link>
            </Button>
          </CardContent>
        </Card>

      </div>
    
  )
}