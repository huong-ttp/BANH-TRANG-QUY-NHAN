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
  setSelectedCategory: (category: string) => void
}
export function ProductsFilter({
  selectedCategory,
  setSelectedCategory,
}: ProductsFilterProps) {
  const [priceRange, setPriceRange] = useState([0, 50])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Bộ lọc sản phẩm</h3>
        <Accordion type="multiple" defaultValue={["categories", "price"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Danh mục</AccordionTrigger>
            <AccordionContent>
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
            <Label>Tất cả</Label>
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

              <Label>{category.name}</Label>
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
      <Button className="w-full bg-green-600 hover:bg-green-700">Áp dụng bộ lọc</Button>
    </div>
  )
}
