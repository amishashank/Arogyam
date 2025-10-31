import { motion } from 'framer-motion'
import ProductGrid from '../medicine/ProductGrid'

function MedicineStoreSection() {
  return (
    <section
      id="medicine-store"
      className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Medicine{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Store
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our selection of essential medicines. Add items to your cart and experience persistent storage - your cart will be saved even after you refresh or close the browser.
          </p>
        </motion.div>

        {/* Product Grid */}
        <ProductGrid />

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            All prices are in Indian Rupees (₹). Cart data persists via localStorage.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MedicineStoreSection
