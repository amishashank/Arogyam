import React from 'react'
import { useCart } from '../../context/CartContext'
import { Minus, Plus, X } from 'lucide-react'
import { motion } from 'framer-motion'

function ProductCard({ product }) {
  const {
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart()

  // Find item in cart
  const cartItem = cart.find((item) => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 mb-4"
    >
      {/* Left Section: Image + Info */}
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-green-600 font-medium mt-1">
            Foxo Price: ₹{product.price} each
          </p>
        </div>
      </div>

      {/* Right Section: Price + Controls */}
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-800 mb-1">
          ₹{product.price}
        </p>

        {/* Quantity Control */}
        <div className="flex items-center justify-end gap-2 mt-2">
          {quantity > 0 ? (
            <>
              <button
                onClick={() => decrementQuantity(product.id)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
              >
                <Minus size={16} />
              </button>
              <span className="font-semibold w-6 text-center">{quantity}</span>
              <button
                onClick={() => incrementQuantity(product.id)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-100 hover:bg-red-200 text-red-600 p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg"
            >
              Add to Cart
            </button>
          )}
        </div>

        <p className="text-xs text-gray-400 mt-1">
          Max: {product.stock || 50}
        </p>
      </div>
    </motion.div>
  )
}

export default ProductCard
