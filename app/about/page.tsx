import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { featuredProducts } from "@/lib/data" // Declare the featuredProducts variable
import { formatPrice } from "@/lib/utils"
export default function AboutPage() {

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">
        Bánh Tráng Quý Nhân
        </h1>

      <p className="text-gray-500">
      Chuyên cung cấp bánh tráng và đặc sản Tây Ninh chất lượng.
      </p>
      <Card>
        <div className="grid md:grid-cols-2 gap-8 items-center">
      
  <div>
    <img
      src="about.jpg"
      alt="Bánh Tráng Quý Nhân"
      className="w-full rounded-xl shadow-lg object-cover"
    />
  </div>
  
  <Card>
    <CardHeader>
      <CardTitle>Về Bánh Tráng Quý Nhân</CardTitle>
    </CardHeader>

    <CardContent>
      <p className="text-gray-600 leading-7">
        Bánh Tráng Quý Nhân chuyên cung cấp các loại bánh tráng,
        muối tôm và đặc sản Tây Ninh chất lượng.

        Chúng tôi lựa chọn sản phẩm có nguồn gốc rõ ràng,
        giữ hương vị truyền thống và mang đến trải nghiệm
        ăn vặt hấp dẫn cho khách hàng trên toàn quốc.
      </p>
    </CardContent>
  </Card>

</div>
      </Card>
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Sản phẩm nổi bật</CardTitle>
              <CardDescription>Những sản phẩm được khách hàng yêu thích nhất</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/detail/${product.id}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="w-12 h-12 rounded overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{product.name}</h4>
                    <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              ))}
              <Link href="/products" className="col-span-full">
                <Button variant="outline" className="w-full mt-2">
                  Xem tất cả sản phẩm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

  <Card>
    <CardContent className="p-6 text-center">
      <h3 className="font-bold text-lg text-emerald-600">
        🌶 Đặc sản Tây Ninh
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Hương vị chuẩn Tây Ninh với nguồn gốc rõ ràng.
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6 text-center">
      <h3 className="font-bold text-lg text-emerald-600">
        🚚 Giao hàng toàn quốc
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Hỗ trợ đặt hàng qua Shopee, TikTok Shop và Lazada.
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-6 text-center">
      <h3 className="font-bold text-lg text-emerald-600">
        ⭐ Sản phẩm chất lượng
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Được nhiều khách hàng tin tưởng và lựa chọn.
      </p>
    </CardContent>
  </Card>

</div>
  <CardHeader>
    <CardTitle>Vì sao chọn Bánh Tráng Quý Nhân?</CardTitle>
  </CardHeader>

  <CardContent>
    <ul className="space-y-2">
      <li>✓ Đặc sản Tây Ninh chính gốc</li>
      <li>✓ Nguyên liệu đảm bảo chất lượng</li>
      <li>✓ Giá cả hợp lý</li>
      <li>✓ Giao hàng toàn quốc</li>
    </ul>
  </CardContent>
</Card>
      </div>
    </div>
  )
}
