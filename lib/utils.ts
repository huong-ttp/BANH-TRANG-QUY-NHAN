import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatPrice(price?: number |null) {
  if (price === undefined || price === null || price <= 0) {
    return "Giá sẽ được cập nhật trong thời gian sớm nhất"
  }

  return `${price.toLocaleString("vi-VN")}đ`
}

