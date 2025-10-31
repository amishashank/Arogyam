import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../utils/cartHelpers'
import QuantityControl from './QuantityControl'

function CartItem({ item }) {
  const { removeFromCart } = useCart()

  const handleRemove = () => {
    if (window.confirm(`Remove ${item.name} from cart?`)) {
      removeFromCart(item.id)
    }
  }

  // 🧮 Apply 5% discount on medicines
  const discountPercent = 5
  const discountAmount = item.price * (discountPercent / 100)
  const finalUnitPrice = item.price - discountAmount

  // 🪙 Calculate rounded total (no tax)
  const itemTotal = Math.round(finalUnitPrice * item.quantity)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Product Image */}
        <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-contain"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/80?text=Med'
            }}
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{item.description}</p>

          {/* Price Info */}
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-500 line-through">
              MRP: {formatPrice(item.price)}
            </p>
            <p className="text-green-600 font-semibold">
              {formatPrice(finalUnitPrice)} each
            </p>
          </div>
        </div>

        {/* Quantity Control */}
        <div className="flex flex-col items-center space-y-2">
          <QuantityControl
            productId={item.id}
            currentQuantity={item.quantity}
          />
        </div>

        {/* Item Total & Remove */}
        <div className="flex flex-col items-end space-y-2 min-w-[120px]">
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(itemTotal)}
          </p>
          <motion.button
            onClick={handleRemove}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-red-500 hover:text-red-700 transition-colors p-2"
            title="Remove item"
          >
            <FaTimes className="text-lg" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default CartItem
