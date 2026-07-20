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
import { Star, Heart, Globe, Award, Leaf } from "lucide-react";
import { PortableText } from "@portabletext/react"
export const metadata = {
  title: "Giới thiệu | Bánh Tráng Quý Nhân",
  description:
    "Câu chuyện hình thành và phát triển của cơ sở Bánh Tráng Quý Nhân tại Tây Ninh.",
}
export default async function AboutPage() {
 
const iconMap: Record<string, any> = {
  star: Star,
  heart: Heart,
  globe: Globe,
  award: Award,
  leaf: Leaf,
};
  
  
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
<section className="my-20">

  <div className="text-center mb-16">

    <h2 className="text-4xl font-bold">
      {about.storyTitle}
    </h2>

    <p className="text-gray-500 mt-3 text-lg">
      {about.storySubtitle}
    </p>

  </div>

  <div className="space-y-20">

    {about.storySections?.map((section: any, index: number) => (

      <div
        key={index}
        className="
        bg-white
        dark:bg-gray-900
        rounded-2xl
        border
        shadow-sm
        p-8
        "
      >

        <h3
          className="
          text-3xl
          font-bold
          border-l-4
          border-orange-500
          pl-4
          mb-8
          "
        >
          {section.heading}
        </h3>

        <div
          className="
          prose
          prose-lg
          dark:prose-invert
          max-w-none
          "
        >
          <PortableText value={section.content} />
        </div>

      </div>

    ))}

  </div>

</section>
<section className="my-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">Giá trị cốt lõi</h2>
    <p className="text-gray-500 mt-3">
      Những giá trị mà Bánh Tráng Quý Nhân luôn theo đuổi
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {about?.coreValues?.map((item: any, index: number) => {
      const Icon = iconMap[item.icon];

      return (
        <Card key={index}>
          <CardContent className="p-6 text-center">

            <div className="text-4xl mb-3 text-emerald-600">
              {Icon ? <Icon size={36} /> : "✨"}
            </div>

            <h3 className="font-bold text-lg">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              {item.description}
            </p>

          </CardContent>
        </Card>
      );
    })}
  </div>
</section>
{/* TẦM NHÌN - CAM KẾT - KẾT */}
<Card>
  <CardContent className="p-8 space-y-10">

    {/* Tầm nhìn */}
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">
        {about?.visionSection?.visionTitle}
      </h3>

      {about?.visionSection?.visionParagraphs?.map(
        (text: string, index: number) => (
          <p
            key={index}
            className="text-muted-foreground leading-8"
          >
            {text}
          </p>
        )
      )}
    </div>

    {/* Cam kết */}
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h3 className="text-2xl font-bold text-black mb-6">
        {about?.visionSection?.commitmentTitle}
      </h3>

      <div className="grid md:grid-cols-2 gap-4 text-black">
        {about?.visionSection?.commitments?.map(
          (item: string, index: number) => (
            <div key={index}>
              ✓ {item}
            </div>
          )
        )}
      </div>
    </div>

    {/* Kết */}
    <div className="border-l-4 border-emerald-500 pl-6 py-2">
      <p className="italic text-muted-foreground leading-8">
        {about?.visionSection?.closingText}
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

        <p className="font-bold text-red-600">
  {product.price
    ? `${product.price.toLocaleString("vi-VN")}đ`
    : "Giá sẽ được cập nhật"}
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