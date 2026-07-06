/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // Theo góp ý chuẩn SEO: Phân loại các URL cũ về ĐÚNG danh mục tương ứng
    // thay vì gom tất cả về chung "/products" để giữ lại sức mạnh SEO (Link Juice) tối đa.

    // 1. Nhóm Đồ ăn vặt (Trỏ về danh mục Đồ ăn vặt)
    const anVatSlugs = [
      "kho-muc", "kho-bo", "banh-trang-tron", "ruoc-say-tay-ninh", "sot-me", "sot-bo", "sot-sa-te",
      "banh-trang-mix-kho-ga", "banh-trang-xi-ke", "banh-trang-pho-mai", "banh-trang-xoai", 
      "toi-phi", "dau-phong-rang", "banh-trang-rong-bien", "hanh-phi", "bo-trang", "bo-vang", "hanh-la-say"
    ];
    const anVatRedirects = anVatSlugs.map(slug => ({
      source: `/${slug}`,
      destination: "/products/do-an-vat", 
      permanent: true,
    }));

    // 2. Nhóm Muối chấm (Trỏ về danh mục Muối chấm)
    const muoiSlugs = [
      "muoi-ot-hat-to", "muoi-tom-hat-to", "muoi-ot-tay-ninh", "muoi-ot-hat-nhuyen"
    ];
    const muoiRedirects = muoiSlugs.map(slug => ({
      source: `/${slug}`,
      destination: "/products/muoi-cham",
      permanent: true,
    }));

    // 3. Nhóm Bánh tráng (Trỏ về danh mục Bánh tráng)
    const banhTrangSlugs = [
      "banh-trang-me-den", "banh-trang-muoi", "banh-trang-mam-ruoc", "banh-trang-cuon",
      "banh-trang-ria-trang", "banh-trang-do-vuong", "banh-trang-me-vang", "banh-trang-trang-vuong",
      "banh-trang-do-tron", "banh-trang-trang-tron", "banh-trang-cat-san", "banh-trang-ria-ot",
      "nguyen-lieu-banh-trang", "banh-trang-nghe-si", "banh-trang-tac-muoi", "banh-trang-deo-gung",
      "banh-trang-me-tom", "banh-trang-deo-tom", "banh-trang-sieu-mong", "banh-trang-deo-cay",
      "banh-trang-xau", "banh-trang-me-dua", "banh-trang-cham", "banh-trang-nuong"
    ];
    const banhTrangRedirects = banhTrangSlugs.map(slug => ({
      source: `/${slug}`,
      destination: "/products/banh-trang",
      permanent: true,
    }));

    // 4. Các sản phẩm CÒN BÁN -> trỏ thẳng về chi tiết sản phẩm mới
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

    // 5. KHẮC PHỤC LỖI TỪ CÔNG CỤ TÌM KIẾM (Google/Yahoo)
    const searchEngineRedirects = [
      {
        source: '/shop', 
        destination: '/products', // Chuyển /shop cũ về trang tổng /products mới
        permanent: true,
      },
      {
        source: '/blog', 
        destination: '/', // Tạm thời đưa blog về trang chủ để không bị 404
        permanent: true,
      },
      {
        source: '/lien-he', 
        destination: '/', // Tạm thời đưa liên hệ về trang chủ
        permanent: true,
      },
      // Các link sản phẩm có đuôi "nhu-binh" trên hình tìm kiếm
      {
        source: '/hanh-la-say-nhu-binh',
        destination: '/products/do-an-vat',
        permanent: true,
      },
      {
        source: '/bo-trang-nhu-binh',
        destination: '/products/do-an-vat',
        permanent: true,
      },
      {
        source: '/banh-trang-me-tom-nhu-binh',
        destination: '/products/banh-trang',
        permanent: true,
      }
    ];

    // Gom tất cả các chiến lược lại và trả về cho Next.js xử lý
    return [
      ...anVatRedirects, 
      ...muoiRedirects, 
      ...banhTrangRedirects, 
      ...specificRedirects,
      ...searchEngineRedirects
    ];
  },
};

export default nextConfig;