import { defineType, defineField } from "sanity"
import { CogIcon } from "@sanity/icons"

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Thông Tin Doanh Nghiệp",
  type: "document",
  icon: CogIcon,

  fields: [
    defineField({
      name: "companyName",
      title: "Tên doanh nghiệp",
      type: "string",
    }),

    defineField({
      name: "phone",
      title: "Số điện thoại",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Địa chỉ",
      type: "text",
    }),

    

    defineField({
      name: "tiktok",
      title: "TikTok",
      type: "url",
    }),

    defineField({
      name: "shopee",
      title: "Shopee",
      type: "url",
    }),

    defineField({
      name: "zalo",
      title: "Zalo",
      type: "string",
    }),
    
    defineField({
  name: "facebook",
  title: "Facebook",
  type: "url",
}),

defineField({
  name: "messenger",
  title: "Messenger",
  type: "url",
}),



    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
  name: "hotline1",
  title: "Hotline 1",
  type: "string",
}),

defineField({
  name: "hotline2",
  title: "Hotline 2",
  type: "string",
}),


defineField({
  name: "officeAddress",
  title: "Địa chỉ văn phòng",
  type: "text",
}),

defineField({
  name: "warehouseAddress",
  title: "Địa chỉ kho",
  type: "text",
}),
defineField({
  name: "warehouseAddress2",
  title: "Địa chỉ kho 2",
  type: "text",
}),
  ],
})
