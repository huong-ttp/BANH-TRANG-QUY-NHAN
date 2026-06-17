import { defineType, defineField } from "sanity"
import { DocumentTextIcon } from "@sanity/icons"

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "Trang Giới Thiệu",
  type: "document",
  icon: DocumentTextIcon,

  fields: [
    
    
    defineField({
      name: "heroTitle",
      title: "Tiêu đề Hero",
      type: "string",
    }),

    defineField({
      name: "heroDescription",
      title: "Mô tả Hero",
      type: "text",
    }),

    defineField({
      name: "heroImage",
      title: "Ảnh Hero",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
        defineField({
  name: "aboutTitle",
  title: "Tiêu đề giới thiệu",
  type: "string",
}),

defineField({
  name: "aboutImage",
  title: "Ảnh giới thiệu",
  type: "image",
  options: {
    hotspot: true,
  },
}),





defineField({
  name: "aboutContent",
  title: "Nội dung giới thiệu",
  type: "array",
  of: [
    {
      type: "text",
    },
  ],
}),
    defineField({
      name: "ownerName",
      title: "Tên chủ doanh nghiệp",
      type: "string",
    }),

    defineField({
      name: "ownerPosition",
      title: "Chức vụ",
      type: "string",
    }),

    defineField({
      name: "ownerImage",
      title: "Ảnh chủ doanh nghiệp",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "ownerStory",
      title: "Câu chuyện chủ doanh nghiệp",
      type: "array",
      of: [{ type: "text" }],
    }),

    defineField({
      name: "ownerQuote",
      title: "Câu nói nổi bật",
      type: "text",
    }),

    defineField({
      name: "brandOriginTitle",
      title: "Tiêu đề nguồn gốc thương hiệu",
      type: "string",
    }),

    defineField({
      name: "brandOriginContent",
      title: "Nội dung nguồn gốc thương hiệu",
      type: "text",
    }),

    defineField({
      name: "brandOriginImage",
      title: "Ảnh nguồn gốc",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "brandOriginButtonText",
      title: "Text nút",
      type: "string",
    }),

    defineField({
      name: "brandOriginButtonLink",
      title: "Link nút",
      type: "url",
    }),

    defineField({
      name: "stats",
      title: "Thống kê",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Giá trị",
              type: "string",
            },
            {
              name: "label",
              title: "Tiêu đề",
              type: "string",
            },
            
          ],
        },
      ],
    }),
    defineField({
  name: "featuredProducts",
  title: "Sản phẩm nổi bật",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "product" }],
    },
  ],
}),

  ],
})