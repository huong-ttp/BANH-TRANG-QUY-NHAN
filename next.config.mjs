/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // ---------------------------------------------------------
    // 1. GOM TẤT CẢ CÁC LINK SẢN PHẨM CŨ BỊ ĐỔI CẤU TRÚC VỀ /products
    // ---------------------------------------------------------
    const sanPhamCuSlugs = [
      // Nhóm Đồ ăn vặt cũ
      "kho-muc", "kho-bo", "banh-trang-tron", "ruoc-say-tay-ninh", "sot-me", "sot-bo", "sot-sa-te",
      "banh-trang-mix-kho-ga", "banh-trang-xi-ke", "banh-trang-pho-mai", "banh-trang-xoai", 
      "toi-phi", "dau-phong-rang", "banh-trang-rong-bien", "hanh-phi", "bo-trang", "bo-vang", "hanh-la-say",
      // Nhóm Muối chấm cũ
      "muoi-ot-hat-to", "muoi-tom-hat-to", "muoi-ot-tay-ninh", "muoi-ot-hat-nhuyen",
      // Nhóm Bánh tráng cũ
      "banh-trang-me-den", "banh-trang-muoi", "banh-trang-mam-ruoc", "banh-trang-cuon",
      "banh-trang-ria-trang", "banh-trang-do-vuong", "banh-trang-me-vang", "banh-trang-trang-vuong",
      "banh-trang-do-tron", "banh-trang-trang-tron", "banh-trang-cat-san", "banh-trang-ria-ot",
      "nguyen-lieu-banh-trang", "banh-trang-nghe-si", "banh-trang-tac-muoi", "banh-trang-deo-gung",
      "banh-trang-me-tom", "banh-trang-deo-tom", "banh-trang-sieu-mong", "banh-trang-deo-cay",
      "banh-trang-xau", "banh-trang-me-dua", "banh-trang-cham", "banh-trang-nuong"
    ];

    const tongHopRedirects = sanPhamCuSlugs.map(slug => ({
      source: `/${slug}`,
      destination: "/products", // Trỏ hết về trang tổng
      permanent: true,
    }));

    // ---------------------------------------------------------
    // 2. CÁC SẢN PHẨM VẪN GIỮ ĐƯỢC LINK CHI TIẾT
    // ---------------------------------------------------------
    const specificRedirects = [
      {
        source: "/banh-trang-toi",
        destination: "/products/detail/banh-trang-toi",
        permanent: true,
      },
      {
        source: "/banh-trang-phoi-suong",
        destination: "/products/detail/banh-trang-phoi-suong",
        permanent: true,
      },
      {
        source: "/muoi-tom-tay-ninh",
        destination: "/products/detail/muoi-tom-tay-ninh",
        permanent: true,
      }
    ];

    // ---------------------------------------------------------
    // 3. KHẮC PHỤC LỖI TỪ CÔNG CỤ TÌM KIẾM (Google/Yahoo)
    // ---------------------------------------------------------
    const searchEngineRedirects = [
      { source: '/shop', destination: '/products', permanent: true },
      { source: '/blog', destination: '/about', permanent: true },
      { source: '/lien-he', destination: '/contact', permanent: true },
      // Xử lý các lỗi 404 danh mục cũ (khi bạn đã đổi cấu trúc thành bộ lọc)
      { source: '/products/banh-trang', destination: '/products', permanent: true },
      { source: '/products/do-an-vat', destination: '/products', permanent: true },
      // Các link sản phẩm có đuôi "nhu-binh" trên hình tìm kiếm
      { source: '/hanh-la-say-nhu-binh', destination: '/products', permanent: true },
      { source: '/bo-trang-nhu-binh', destination: '/products', permanent: true },
      { source: '/banh-trang-me-tom-nhu-binh', destination: '/products', permanent: true }
    ];

    // Gom lại và trả về
    return [
      ...tongHopRedirects, 
      ...specificRedirects,
      ...searchEngineRedirects
    ];
  },
};

export default nextConfig;
