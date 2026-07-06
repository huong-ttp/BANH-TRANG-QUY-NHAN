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
    // 1. NHÓM BÁNH TRÁNG CỤ THỂ (Trỏ về đúng danh mục chi tiết)
    // ---------------------------------------------------------
    
    // -> Bánh Tráng Dẻo
    const btDeo = ["banh-trang-deo-gung", "banh-trang-deo-tom", "banh-trang-deo-cay"];
    const btDeoRedirects = btDeo.map(slug => ({
      source: `/${slug}`,
      destination: "/products/bt-deo", // <- Đảm bảo slug trong Sanity là 'bt-deo'
      permanent: true,
    }));

    // -> Bánh Tráng Nướng
    const btNuongRedirects = [{
      source: "/banh-trang-nuong",
      destination: "/products/bt-nuong", // <- Đảm bảo slug trong Sanity là 'bt-nuong'
      permanent: true,
    }];

    // -> Bánh Tráng Siêu Mỏng
    const btSieuMongRedirects = [{
      source: "/banh-trang-sieu-mong",
      destination: "/products/bt-sieu-mong", // <- Đảm bảo slug trong Sanity là 'bt-sieu-mong'
      permanent: true,
    }];

    // -> Bánh Tráng Xâu
    const btXauRedirects = [{
      source: "/banh-trang-xau",
      destination: "/products/bt-xau", // <- Đảm bảo slug trong Sanity là 'bt-xau'
      permanent: true,
    }];

    // -> Bánh Tráng Trộn Sẵn
    const btTronSan = ["banh-trang-tron", "banh-trang-mix-kho-ga", "banh-trang-xi-ke", "banh-trang-pho-mai"];
    const btTronSanRedirects = btTronSan.map(slug => ({
      source: `/${slug}`,
      destination: "/products/bt-tron-san", // <- Đảm bảo slug trong Sanity là 'bt-tron-san'
      permanent: true,
    }));

    // -> Muối
    const muoi = ["muoi-ot-hat-to", "muoi-tom-hat-to", "muoi-ot-tay-ninh", "muoi-ot-hat-nhuyen"];
    const muoiRedirects = muoi.map(slug => ({
      source: `/${slug}`,
      destination: "/products/muoi", // <- Đảm bảo slug trong Sanity là 'muoi'
      permanent: true,
    }));

    // ---------------------------------------------------------
    // 2. NHÓM ĐỒ ĂN VẶT & SẢN PHẨM KHÁC KHÔNG CÓ DANH MỤC
    // (Vì bạn đã xóa danh mục Đồ ăn vặt, ta trỏ tất cả về trang tổng /products)
    // ---------------------------------------------------------
    const khongCoDanhMuc = [
      "kho-muc", "kho-bo", "ruoc-say-tay-ninh", "sot-me", "sot-bo", "sot-sa-te",
      "banh-trang-xoai", "toi-phi", "dau-phong-rang", "banh-trang-rong-bien", "hanh-phi", "bo-trang", "bo-vang", "hanh-la-say",
      "banh-trang-me-den", "banh-trang-muoi", "banh-trang-mam-ruoc", "banh-trang-cuon",
      "banh-trang-ria-trang", "banh-trang-do-vuong", "banh-trang-me-vang", "banh-trang-trang-vuong",
      "banh-trang-do-tron", "banh-trang-trang-tron", "banh-trang-cat-san", "banh-trang-ria-ot",
      "nguyen-lieu-banh-trang", "banh-trang-nghe-si", "banh-trang-tac-muoi", "banh-trang-cham"
    ];
    const tongHopRedirects = khongCoDanhMuc.map(slug => ({
      source: `/${slug}`,
      destination: "/products", 
      permanent: true,
    }));

    // ---------------------------------------------------------
    // 3. CÁC SẢN PHẨM CÒN BÁN (Trỏ thẳng vào chi tiết sản phẩm)
    // ---------------------------------------------------------
    const specificRedirects = [
      { source: "/banh-trang-toi", destination: "/products/detail/banh-trang-toi", permanent: true },
      { source: "/banh-trang-phoi-suong", destination: "/products/detail/banh-trang-phoi-suong", permanent: true },
      { source: "/muoi-tom-tay-ninh", destination: "/products/detail/muoi-tom-tay-ninh", permanent: true }
    ];

    // ---------------------------------------------------------
    // 4. KHẮC PHỤC LỖI TỪ CÔNG CỤ TÌM KIẾM (Google/Yahoo)
    // ---------------------------------------------------------
    const searchEngineRedirects = [
      { source: '/shop', destination: '/products', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/lien-he', destination: '/', permanent: true },
      { source: '/hanh-la-say-nhu-binh', destination: '/products', permanent: true },
      { source: '/bo-trang-nhu-binh', destination: '/products', permanent: true },
      { source: '/banh-trang-me-tom-nhu-binh', destination: '/products', permanent: true },
      // Giải quyết 2 link danh mục cũ bị Google lưu cache:
      { source: '/products/banh-trang', destination: '/products', permanent: true },
      { source: '/products/do-an-vat', destination: '/products', permanent: true }
    ];

    // Gom tất cả các chiến lược lại
    return [
      ...btDeoRedirects,
      ...btNuongRedirects,
      ...btSieuMongRedirects,
      ...btXauRedirects,
      ...btTronSanRedirects,
      ...muoiRedirects,
      ...tongHopRedirects,
      ...specificRedirects,
      ...searchEngineRedirects
    ];
  },
};

export default nextConfig;