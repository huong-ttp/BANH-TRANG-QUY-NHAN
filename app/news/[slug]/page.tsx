import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { newsPosts } from "@/lib/data"

interface NewsDetailPageProps {
  params: {
    slug: string
  }
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {

  const post = newsPosts.find(
    (item) => item.slug === params.slug
  )

  if (!post) {
    return {}
  }

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
export default function NewsDetailPage({
  params,
}: NewsDetailPageProps) {

  const post = newsPosts.find(
    (item) => item.slug === params.slug
  )

  if (!post) {
    notFound()
  }

  const relatedPosts = newsPosts
    .filter((item) => item.slug !== post.slug)
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

      <article className="max-w-4xl mx-auto">

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[450px] object-cover rounded-xl mb-8"
        />

        <p className="text-sm text-gray-500 mb-2">
          {post.date}
        </p>

        <h1 className="text-4xl font-bold mb-6">
          {post.title}
        </h1>

        <div className="prose prose-lg max-w-none">
        <div className="prose prose-lg max-w-none">
        {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
        </div>
        </div>

      </article>

      {/* Bài viết liên quan */}

      <div className="max-w-6xl mx-auto mt-20">

        <h2 className="text-2xl font-bold mb-6">
          Khám phá thêm Tây Ninh
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {relatedPosts.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
            >
              <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">

                  <h3 className="font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.excerpt}
                  </p>

                </div>

              </div>
            </Link>
          ))}

        </div>
        
      </div>

    </div>
  )
}