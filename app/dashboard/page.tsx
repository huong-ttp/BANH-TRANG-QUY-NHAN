import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, Gift, Package, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockUser } from "@/lib/data"
import { OrderHistory } from "@/components/order-history"
import { ScheduledDeliveries } from "@/components/scheduled-deliveries"
import { WalletOverview } from "@/components/wallet-overview"
import { RewardsOverview } from "@/components/rewards-overview"
import { PayLaterOverview } from "@/components/pay-later-overview"
import { featuredProducts } from "@/lib/data" // Declare the featuredProducts variable

export default function DashboardPage() {
  const user = mockUser

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Tài khoản khách hàng</h1>
          <p className="text-gray-500">Chào mừng quay lại, {user.name}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Đơn hàng</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{user.wallet.balance.toFixed(2)}</div>
              <p className="text-xs text-gray-500 mt-1">
                Last transaction: {new Date(user.wallet.transactions[0].date).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Lịch sử mua hàng</CardTitle>
              <Gift className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.rewards.points}</div>
              <p className="text-xs text-gray-500 mt-1">
                {user.rewards.points} points = ₹{(user.rewards.points / 100).toFixed(2)} discount
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Sản phẩm yêu thích</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{user.payLater.used.toFixed(2)}</div>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Used: ₹{user.payLater.used.toFixed(2)}</span>
                  <span>Limit: ₹{user.payLater.limit.toFixed(2)}</span>
                </div>
                <Progress value={(user.payLater.used / user.payLater.limit) * 100} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Đơn hàng gần nhất</CardTitle>
              <Calendar className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Date(user.scheduledDeliveries[0].nextDelivery).toLocaleDateString()}
              </div>
              <p className="text-xs text-gray-500 mt-1">{user.scheduledDeliveries[0].items.length} items scheduled</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="orders">
              <Package className="h-4 w-4 mr-2" />
              Đơn hàng 
            </TabsTrigger>
            <TabsTrigger value="scheduled">
              <Calendar className="h-4 w-4 mr-2" />
              Yêu thích
            </TabsTrigger>
            <TabsTrigger value="wallet">
              <CreditCard className="h-4 w-4 mr-2" />
              Thông tin
            </TabsTrigger>
            <TabsTrigger value="rewards">
              <Gift className="h-4 w-4 mr-2" />
              Khuyến mãi
            </TabsTrigger>
            <TabsTrigger value="paylater">
              <CreditCard className="h-4 w-4 mr-2" />
              Liên hệ
            </TabsTrigger>
          </TabsList>
          <TabsContent value="orders" className="pt-6">
            <OrderHistory orders={user.orders} />
          </TabsContent>
          <TabsContent value="scheduled" className="pt-6">
            <ScheduledDeliveries scheduledDeliveries={user.scheduledDeliveries} />
          </TabsContent>
          <TabsContent value="wallet" className="pt-6">
            <WalletOverview wallet={user.wallet} />
          </TabsContent>
          <TabsContent value="rewards" className="pt-6">
            <RewardsOverview rewards={user.rewards} />
          </TabsContent>
          <TabsContent value="paylater" className="pt-6">
            <PayLaterOverview payLater={user.payLater} />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sản phẩm nổi bật</CardTitle>
              <CardDescription>Cái sản phẩm bán chạy tại Bánh Tráng Quý Nhân</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
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
                    <p className="text-sm text-gray-500">₹{product.price.toFixed(2)}</p>
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
      </div>
    </div>
  )
}
