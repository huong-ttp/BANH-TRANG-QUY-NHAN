"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ProductsFilterProps {
  categories: {
    _id: string
    title: string
    slug: string
  }[]
  selectedCategory: string
  priceRange: number[]
  setPriceRange: (value: number[]) => void
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export function ProductsFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}: ProductsFilterProps) {
  
  return (
  <div className="
    space-y-6
    bg-white
    dark:bg-gray-900
    border
    border-orange-100
    dark:border-gray-800
    rounded-2xl
    p-6
    shadow-md
    sticky
    top-24
  ">
      <div>
        <h3 className="
        flex
        items-center
        gap-2
        text-lg
        font-bold
        text-orange-600
        border-b
        pb-3
      ">Bộ lọc sản phẩm</h3>
        <Accordion type="multiple" defaultValue={["categories", "price"]} className="space-y-4">
          
          {/* LỌC DANH MỤC - GIỮ NGUYÊN GIAO DIỆN CŨ CỦA BẠN */}
          <AccordionItem value="categories">
            <AccordionTrigger>Danh mục</AccordionTrigger>
            <AccordionContent className="bg-orange-200 rounded-xl p-4">
              <div className="space-y-3 pt-2">
              <div className="space-y-3">
            <div className="space-y-3 pt-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={selectedCategory === "all"}
              onCheckedChange={() =>
                setSelectedCategory("all")
              }
            />
            <Label className="text-gray-700 dark:text-black-200">Tất cả</Label>
          </div>

          {categories.map((category) => (
  <div
    key={category._id}
    className="flex items-center space-x-2"
  >
              <Checkbox
                checked={
                  selectedCategory === category.slug
                }
                onCheckedChange={() =>
                  setSelectedCategory(category.slug)
                }
              />
              <Label className="text-gray-700 dark:text-black-200"> {category.title}</Label>
            </div>
          ))}
        </div>
          </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* LỌC GIÁ TIỀN - TỰ NHẬP KHOẢNG GIÁ */}
          <AccordionItem value="price">
            <AccordionTrigger>Khoảng giá</AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center gap-3 pt-4 pb-2">
                {/* Ô nhập giá tối thiểu */}
                <div className="flex-1">
                  <Label className="text-xs text-gray-500 mb-1.5 block">Từ (VNĐ)</Label>
                  <input
                    type="number"
                    min="0"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([e.target.value ? Number(e.target.value) : 0, priceRange[1]])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder="0"
                  />
                </div>
                
                <span className="text-gray-400 mt-6">-</span>
                
                {/* Ô nhập giá tối đa */}
                <div className="flex-1">
                  <Label className="text-xs text-gray-500 mb-1.5 block">Đến (VNĐ)</Label>
                  <input
                    type="number"
                    min="0"
                    value={priceRange[1] >= 5000000 ? '' : priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], e.target.value ? Number(e.target.value) : 5000000])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    placeholder="VD: 200000"
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