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
    defineField({
  name: "storyTitle",
  title: "Tiêu đề câu chuyện",
  type: "string",
}),

defineField({
  name: "storySubtitle",
  title: "Mô tả ngắn",
  type: "string",
}),

defineField({
  name: "storySections",
  title: "Các mục nội dung",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Tiêu đề",
          type: "string",
        }),
        defineField({
          name: "content",
          title: "Nội dung",
          type: "array",
          of: [{ type: "block" }],
        }),
      ],
    },
  ],
}),
    defineField({
  name: "coreValues",
  title: "Giá trị cốt lõi",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        defineField({
          name: "icon",
          title: "Icon",
          type: "string",
          options: {
            list: [
              { title: "⭐ Star", value: "star" },
              { title: "❤️ Heart", value: "heart" },
              { title: "🌍 Globe", value: "globe" },
              { title: "🏆 Award", value: "award" },
              { title: "🌿 Leaf", value: "leaf" },
            ],
          },
        }),

        defineField({
          name: "title",
          title: "Tiêu đề",
          type: "string",
        }),

        defineField({
          name: "description",
          title: "Mô tả",
          type: "text",
        }),
      ],
    },
  ],
}),
  defineField({
  name: "visionSection",
  title: "Tầm nhìn - Cam kết - Kết",
  type: "object",
  fields: [
    {
      name: "visionTitle",
      title: "Tiêu đề Tầm nhìn",
      type: "string",
    },
    {
      name: "visionParagraphs",
      title: "Nội dung Tầm nhìn",
      type: "array",
      of: [{ type: "text" }],
    },

    {
      name: "commitmentTitle",
      title: "Tiêu đề Cam kết",
      type: "string",
    },

    {
      name: "commitments",
      title: "Danh sách cam kết",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "closingText",
      title: "Đoạn kết",
      type: "text",
    },
  ],
})
  ],
})