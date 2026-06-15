import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FEATURED_POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries"
import { Card, CardContent } from "@/components/ui/card"
import { client } from "@/sanity/lib/client"

export const metadata = {
  title: "Khám phá Tây Ninh | Bánh Tráng Quý Nhân",
  description:
    "Tìm hiểu văn hóa, du lịch, ẩm thực và đặc sản nổi tiếng của Tây Ninh.",
}

export default async function NewsPage() {
  const featuredPost = await client.fetch(FEATURED_POST_QUERY)
  const posts = await client.fetch(POSTS_QUERY)

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
              Hiện có {posts.length + (featuredPost ? 1 : 0)} bài viết
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <Link href={`/news/${featuredPost.slug}`}>
          <div className="mb-10 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">

            <img
              src={featuredPost.image || "/placeholder.jpg"}
              className="w-full h-[350px] object-cover"
              alt={featuredPost.title}
            />

            <div className="p-6">
              <span className="text-red-600 font-semibold text-sm">
                ⭐ Bài viết nổi bật
              </span>

              <h2 className="text-2xl font-bold mt-2">
                {featuredPost.title}
              </h2>

              <p className="text-gray-600 mt-2 line-clamp-2">
                {featuredPost.excerpt}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* LIST POSTS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <Link key={post._id} href={`/news/${post.slug}`}>
            <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

              <img
                src={post.image || "/placeholder.jpg"}
                alt={post.title}
                className="w-full h-56 object-cover"
              />

              <CardContent className="p-5">
                <time className="text-orange-600 font-medium mb-3 block">
                  {new Date(post.date).toLocaleDateString("vi-VN")}
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