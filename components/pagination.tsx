"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function AppPagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  // Hàm tạo URL mới dựa trên URL cũ (giữ lại category, price,... chỉ thay đổi page)
  const createPageURL = (pageNumber: number | string) => {
    // Lấy toàn bộ tham số hiện tại trên thanh địa chỉ (VD: category=muoi)
    const params = new URLSearchParams(searchParams?.toString() || "");
    // Chỉ ghi đè hoặc thêm số trang mới vào
    params.set("page", pageNumber.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  // Logic tạo danh sách các trang cần hiển thị với Ellipsis (...)
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        
        {/* Nút Trước (Previous) */}
        <PaginationItem>
          <PaginationPrevious 
            href={currentPage > 1 ? createPageURL(currentPage - 1) : "#"} 
            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* Danh sách các số trang */}
        {getPageNumbers().map((p, i) => (
          <PaginationItem key={i}>
            {p === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink 
                href={createPageURL(p)} 
                isActive={currentPage === p}
              >
                {p}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Nút Sau (Next) */}
        <PaginationItem>
          <PaginationNext 
            href={currentPage < totalPages ? createPageURL(currentPage + 1) : "#"}
            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        
      </PaginationContent>
    </Pagination>
  );
}