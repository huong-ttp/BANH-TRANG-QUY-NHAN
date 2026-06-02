import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { newsPosts } from "@/lib/data"

export default function NewsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">

      {/* Banner */}
      <div className="text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Khám Phá Tây Ninh
        </h1>

        <p className="text-gray-500 max-w-3xl mx-auto text-lg">
          Nơi chia sẻ những câu chuyện về văn hóa, du lịch, con người
          và các đặc sản nổi tiếng của quê hương Tây Ninh.
        </p>

        <div className="mt-6 text-sm text-gray-500">
          Hiện có {newsPosts.length} bài viết
        </div>

      </div>

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

                <p className="text-sm text-gray-500 mb-2">
                  {post.date}
                </p>

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