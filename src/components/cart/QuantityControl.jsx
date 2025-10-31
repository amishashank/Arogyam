import { motion } from 'framer-motion'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import { medicines } from '../../utils/medicineData'

function QuantityControl({ productId, currentQuantity }) {
  const { incrementQuantity, decrementQuantity } = useCart()

  // Find product to get stock info
  const product = medicines.find(m => m.id === productId)
  const stock = product ? product.stock : 0

  const canDecrement = currentQuantity > 1
  const canIncrement = currentQuantity < stock

  const handleIncrement = () => {
    incrementQuantity(productId)
  }

  const handleDecrement = () => {
    decrementQuantity(productId)
  }

  return (
    <div className="flex items-center">
      <motion.button
        onClick={handleDecrement}
        disabled={!canDecrement}
        whileHover={canDecrement ? { scale: 1.1 } : {}}
        whileTap={canDecrement ? { scale: 0.95 } : {}}
        className={`w-8 h-8 rounded-l-lg border flex items-center justify-center ${
          canDecrement
            ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
            : 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200'
        }`}
      >
        <FaMinus className="text-xs" />
      </motion.button>

      <div className="w-16 h-8 border-t border-b border-gray-300 bg-white flex items-center justify-center">
        <span className="font-semibold text-gray-900">{currentQuantity}</span>
      </div>

      <motion.button
        onClick={handleIncrement}
        disabled={!canIncrement}
        whileHover={canIncrement ? { scale: 1.1 } : {}}
        whileTap={canIncrement ? { scale: 0.95 } : {}}
        className={`w-8 h-8 rounded-r-lg border flex items-center justify-center ${
          canIncrement
            ? 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
            : 'bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200'
        }`}
      >
        <FaPlus className="text-xs" />
      </motion.button>

      {/* Stock limit hint */}
      {stock > 0 && (
        <span className="ml-2 text-xs text-gray-500">
          Max: {stock}
        </span>
      )}
    </div>
  )
}

export default QuantityControl