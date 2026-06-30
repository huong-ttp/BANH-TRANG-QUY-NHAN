"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ProductsFilterProps {
  categories: {
    _id: string
    title: string
    slug: string
  }[]
  priceRange: number[]
  setPriceRange: (value: number[]) => void
}

export function ProductsFilter({
  categories,
  priceRange,
  setPriceRange,
}: ProductsFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Lấy danh mục đang chọn từ URL, nếu không có thì mặc định là "all"
  const currentCategory = searchParams.get("category") || "all"

  // Hàm xử lý khi click chọn danh mục
  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (slug === "all") {
      params.delete("category") // Xóa category khỏi URL nếu chọn Tất cả
    } else {
      params.set("category", slug) // Thêm category vào URL
    }
    
    params.set("page", "1") // Bất cứ khi nào đổi bộ lọc, phải reset về trang 1
    
    // Đẩy URL mới lên trình duyệt mà không làm giật trang (scroll: false)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="space-y-6 bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-2xl p-6 shadow-md sticky top-24">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-orange-600 border-b pb-3">Bộ lọc sản phẩm</h3>
        <Accordion type="multiple" defaultValue={["categories", "price"]} className="space-y-4">
          
          {/* LỌC DANH MỤC */}
          <AccordionItem value="categories">
            <AccordionTrigger>Danh mục</AccordionTrigger>
            <AccordionContent className="bg-orange-50 dark:bg-gray-800 rounded-xl p-4 border border-orange-100 dark:border-gray-700">
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={currentCategory === "all"}
                    onCheckedChange={() => handleCategoryChange("all")}
                  />
                  <Label className="text-gray-700 dark:text-gray-200 cursor-pointer">Tất cả</Label>
                </div>

                {categories.map((category) => (
                  <div key={category._id} className="flex items-center space-x-2">
                    <Checkbox
                      checked={currentCategory === category.slug}
                      onCheckedChange={() => handleCategoryChange(category.slug)}
                    />
                    <Label className="text-gray-700 dark:text-gray-200 cursor-pointer">{category.title}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* LỌC GIÁ TIỀN */}
          <AccordionItem value="price">
            <AccordionTrigger>Khoảng giá</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center gap-3 pt-4 pb-2">
                <div className="flex-1">
                  <Label className="text-xs text-gray-500 mb-1.5 block">Từ (VNĐ)</Label>
                  <input
                    type="number"
                    min="0"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([e.target.value ? Number(e.target.value) : 0, priceRange[1]])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <span className="text-gray-400 mt-6">-</span>
                <div className="flex-1">
                  <Label className="text-xs text-gray-500 mb-1.5 block">Đến (VNĐ)</Label>
                  <input
                    type="number"
                    min="0"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], e.target.value ? Number(e.target.value) : 5000000])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}