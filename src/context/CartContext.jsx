import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { findCartItem, getTotalPrice, getTotalQuantity } from '../utils/cartHelpers'
import { medicines } from '../utils/medicineData'

const CartContext = createContext()

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage('foxo-cart', [])

  // Add item to cart or increment quantity if already exists
  const addToCart = (product) => {
    const existingItem = findCartItem(cart, product.id)

    if (existingItem) {
      // Check if incrementing would exceed stock
      if (existingItem.quantity + 1 > product.stock) {
        alert('Cannot exceed available stock')
        return false
      }

      // Increment quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      // Add new item with quantity 1
      setCart([...cart, { ...product, quantity: 1 }])
    }

    return true
  }

  // Remove item from cart completely
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  // Update quantity to specific value
  const updateQuantity = (productId, newQuantity) => {
    // Find product in medicine data to get stock
    const product = medicines.find(m => m.id === productId)
    if (!product) return false

    // If quantity is 0 or less, remove item
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return true
    }

    // Validate quantity
    if (newQuantity > product.stock) {
      alert('Cannot exceed available stock')
      return false
    }

    // Update quantity
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    ))

    return true
  }

  // Increment quantity by 1
  const incrementQuantity = (productId) => {
    const cartItem = findCartItem(cart, productId)
    if (!cartItem) return false

    // Find product in medicine data to get stock
    const product = medicines.find(m => m.id === productId)
    if (!product) return false

    // Check stock limit
    if (cartItem.quantity + 1 > product.stock) {
      alert('Cannot exceed available stock')
      return false
    }

    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))

    return true
  }

  // Decrement quantity by 1 (remove if quantity becomes 0)
  const decrementQuantity = (productId) => {
    const cartItem = findCartItem(cart, productId)
    if (!cartItem) return false

    if (cartItem.quantity === 1) {
      // Remove item if quantity would become 0
      removeFromCart(productId)
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ))
    }

    return true
  }

  // Get cart total price
  const getCartTotal = () => {
    return getTotalPrice(cart)
  }

  // Get cart item count
  const getCartItemCount = () => {
    return getTotalQuantity(cart)
  }

  // Clear entire cart
  const clearCart = () => {
    setCart([])
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
