import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'

function CartIcon() {
  const navigate = useNavigate()
  const { getCartItemCount } = useCart()
  const itemCount = getCartItemCount()

  return (
    <motion.button
      onClick={() => navigate('/cart')}
      className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaShoppingCart className="text-2xl text-gray-700" />

      {itemCount > 0 && (
        <motion.span
          key={itemCount}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
        >
          {itemCount}
        </motion.span>
      )}
    </motion.button>
  )
}

export default CartIcon
