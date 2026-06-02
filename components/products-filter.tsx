"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"

export function ProductsFilter() {
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
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox id={`category-${category.id}`} />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Khoảng giá</AccordionTrigger>
            <AccordionContent>
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
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="discount">
            <AccordionTrigger>Loại sản phẩm</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-10" />
                  <Label htmlFor="discount-10">Bánh tráng</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-20" />
                  <Label htmlFor="discount-20">Muối</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-30" />
                  <Label htmlFor="discount-30">Các đặc sản khác</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button className="w-full bg-green-600 hover:bg-green-700">Áp dụng bộ lọc</Button>
    </div>
  )
}
