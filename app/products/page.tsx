import { client } from "@/sanity/lib/client"
import { Metadata } from "next"
import {
  PAGINATED_ALL_PRODUCTS_QUERY,
  ALL_PRODUCTS_COUNT_QUERY,
  CATEGORIES_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY, // Nhớ import thêm 2 query này
  PRODUCTS_COUNT_QUERY        // từ file queries.ts của bạn
} from "@/sanity/lib/queries"
import { AppPagination } from "@/components/pagination"
import ProductsClient from "./products-client"

export const metadata: Metadata = {
  title: "Tất cả sản phẩm | Đặc Sản Bánh Tráng Tây Ninh Chính Gốc",
  description: "Khám phá danh sách các loại bánh tráng phơi sương, bánh tráng trộn, muối tôm và đặc sản Tây Ninh thơm ngon nhất tại Bánh Tráng Quý Nhân.",
}

export default async function ProductsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string; category?: string }> // Thêm category vào type
}) {
  const { page, category } = await searchParams
  
  // Logic phân trang
  const currentPage = Number(page) || 1
  const pageSize = 12 // Hiển thị 12 sản phẩm mỗi trang
  const start = (currentPage - 1) * pageSize
  const end = start + pageSize

  let products = [];
  let totalProducts = 0;
  let categoriesData = [];

  // Phân nhánh fetch dữ liệu: Lọc theo danh mục HOẶC Lấy tất cả
  if (category && category !== "all") {
    // Trường hợp có chọn 1 danh mục cụ thể trên URL
    const [catProducts, catTotal, allCats] = await Promise.all([
      client.fetch(PRODUCTS_BY_CATEGORY_QUERY, { slug: category, start, end }),
      client.fetch(PRODUCTS_COUNT_QUERY, { slug: category }),
      client.fetch(CATEGORIES_QUERY)
    ]);
    products = catProducts;
    totalProducts = catTotal;
    categoriesData = allCats;
  } else {
    // Trường hợp "Tất cả" hoặc không có tham số category
    const [allProducts, allTotal, allCats] = await Promise.all([
      client.fetch(PAGINATED_ALL_PRODUCTS_QUERY, { start, end }),
      client.fetch(ALL_PRODUCTS_COUNT_QUERY),
      client.fetch(CATEGORIES_QUERY)
    ]);
    products = allProducts;
    totalProducts = allTotal;
    categoriesData = allCats;
  }

  const totalPages = Math.ceil(totalProducts / pageSize)

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductsClient
        products={products}
        categories={categoriesData}
      />
      
      {/* Chỉ hiển thị nút phân trang khi có sản phẩm */}
      {totalPages > 0 ? (
        <AppPagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          baseUrl="/products" 
        />
      ) : (
        <div className="text-center py-10 text-gray-500">
          Không có sản phẩm nào phù hợp với bộ lọc.
        </div>
      )}
    </div>
  )
}