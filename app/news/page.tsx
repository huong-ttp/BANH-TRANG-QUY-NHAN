import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { newsPosts } from "@/lib/data"
export const metadata = {
  title: "Khám phá Tây Ninh | Bánh Tráng Quý Nhân",
  description:
    "Tìm hiểu văn hóa, du lịch, ẩm thực và đặc sản nổi tiếng của Tây Ninh.",
}
export default function NewsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl mb-10">
        <img
          src="/banner-about.jpg"
          alt="Đặc sản Tây Ninh"
          className="h-[400px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Khám Phá Tây Ninh
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Nơi chia sẻ những câu chuyện về văn hóa, du lịch, con người
              và các đặc sản nổi tiếng của quê hương Tây Ninh.
            </p>

            <div className="mt-6 text-sm text-gray-200">
              Hiện có {newsPosts.length} bài viết
            </div>
          </div>
        </div>
      </section>

      {/* Danh sách bài viết */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsPosts.map((post) => (
          <Link
            key={post.id}
            href={`/news/${post.slug}`}
          >
            <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />

              <CardContent className="p-5">
                <time
                dateTime="2025-08-01"
                className="text-orange-600 font-medium mb-3 block"
              >
                {post.date}
              </time>

                <h2 className="font-bold text-xl mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center text-green-600 font-medium text-sm">
                  Đọc tiếp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>

            </Card>
          </Link>
        ))}
      </div>

    </div>
  )
}