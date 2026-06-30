"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "./types"

interface CartItem {
  product: Product
  quantity: number
}


interface StoreState {
  cart: CartItem[]
  
  isCartOpen: boolean
 

  // Cart actions
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartItemQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemsCount: () => number
  toggleCart: () => void

  
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,
      

      // Cart actions
      addToCart: (product, quantity = 1) => {
        const { cart } = get()
        const existingItem = cart.find((item) => item.product._id === product._id)

        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.product._id === product._id ? { ...item, quantity: item.quantity + quantity } : item,
          )
          set({ cart: updatedCart })
        } else {
          set({ cart: [...cart, { product, quantity }] })
        }
      },

      removeFromCart: (productId) => {
        const { cart } = get()
        set({ cart: cart.filter((item) => item.product._id !== productId) })
      },

      updateCartItemQuantity: (productId, quantity) => {
        const { cart } = get()
        const updatedCart = cart.map((item) => (item.product._id === productId ? { ...item, quantity } : item))
        set({ cart: updatedCart })
      },

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        const { cart } = get()
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },

      getCartItemsCount: () => {
        const { cart } = get()
        return cart.reduce((count, item) => count + item.quantity, 0)
      },

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      
    }),
    {
      name: "banhtrang-storage",
    },
  ),
)
