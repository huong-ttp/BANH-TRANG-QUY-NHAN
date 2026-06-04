"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"


interface ProductsFilterProps {
  selectedCategory: string
  priceRange: number[]
  setPriceRange: (value: number[]) => void
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<string>
  >
}
export function ProductsFilter({
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
              key={category.id}
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

              <Label className="text-gray-700 dark:text-black-200"> {category.name}</Label>
            </div>
          ))}
        </div>
          </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Khoảng giá</AccordionTrigger>
            
              <div className="space-y-4 pt-2">
               <Slider
                defaultValue={[0, 500000]}
                max={500000}
                step={10000}
                value={priceRange}
                onValueChange={setPriceRange}
/>
                <div className="flex items-center justify-between">
                  <span>{priceRange[0].toLocaleString("vi-VN")}đ</span>
                  <span>{priceRange[1].toLocaleString("vi-VN")}đ</span>
                </div>
              </div>
            
          </AccordionItem>
        </Accordion>
      </div>
      <Button className="
      w-full
      bg-orange-500
      hover:bg-orange-600
      text-white
      font-semibold
      h-12
      rounded-xl
      shadow-md
    ">Áp dụng bộ lọc</Button>
      </div>
  )
}
