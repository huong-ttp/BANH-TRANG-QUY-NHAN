import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { client } from "@/sanity/lib/client"
import {
  POST_DETAIL_QUERY,
  POSTS_QUERY,
} from "@/sanity/lib/queries"
import Image from "next/image"

interface NewsDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await client.fetch(
  POST_DETAIL_QUERY,
  { slug }
)

  if (!post) return {}

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  }
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params

  const post = await client.fetch(
  POST_DETAIL_QUERY,
  { slug }
)

  if (!post) {
    notFound()
  }

  const allPosts = await client.fetch(POSTS_QUERY)

const relatedPosts = allPosts
  .filter((item: any) => item.slug !== post.slug)
  .slice(0, 3)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">

      <Link
        href="/news"
        className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Quay lại Khám phá Tây Ninh
      </Link>

      <article className="max-w-5xl mx-auto">

  {/* Banner */}
  <div className="relative mb-10">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
    />

    <div className="absolute bottom-6 left-6">
      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
        Khám phá Tây Ninh
      </span>
    </div>
  </div>

  {/* Header */}
  <div className="max-w-4xl mx-auto mb-10">

    <time dateTime={post.publishedAt}>
  {post.publishedAt}
</time>

    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
      {post.title}
    </h1>

    <p className="text-xl text-gray-600 leading-relaxed">
      {post.excerpt}
    </p>

  </div>

  {/* Content */}
  <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-12">

    <div className="prose prose-lg max-w-none text-gray-800">

      {post.content
        .split("\n\n")
        .map((paragraph, index) => (
          <p key={index} className="mb-8">
            {paragraph}
          </p>
      ))}

    </div>

  </div>

</article>

      <div className="max-w-6xl mx-auto mt-24">

  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">
      Khám Phá Thêm Tây Ninh
    </h2>

    <p className="text-gray-500 mt-2">
      Những bài viết nổi bật khác về văn hóa, du lịch và đặc sản Tây Ninh.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {relatedPosts.map((item) => (
      <Link
        key={item.id}
        href={`/news/${item.slug}`}
      >
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all duration-300">

          <div className="overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={1200}
            height={630}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

          <div className="p-5">

            <p className="text-sm text-orange-600 mb-2">
              {item.date}
            </p>

            <h3 className="font-bold text-lg mb-3 line-clamp-2 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
            {item.title}
            </h3>

            <p className="text-gray-500 text-sm line-clamp-3">
              {item.excerpt}
            </p>

          </div>

        </div>
      </Link>
    ))}

  </div>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      image: [post.image],
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: "Bánh Tráng Quý Nhân",
      },
    }),
  }}
/>
</div>

    </div>
  )
}