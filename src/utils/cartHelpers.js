// Find and return item in cart by id
export function findCartItem(cart, productId) {
  return cart.find(item => item.id === productId)
}

// Calculate total for a single item
export function calculateItemTotal(item) {
  return item.price * item.quantity
}

// Validate quantity against stock
export function validateQuantity(quantity, stock) {
  return quantity >= 1 && quantity <= stock
}

// Format price with currency symbol
export function formatPrice(price) {
  return `₹${price}`
}

// Get total quantity of all items in cart
export function getTotalQuantity(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0)
}

// Get total price of all items in cart
export function getTotalPrice(cart) {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
}
