import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaRocket, FaPalette, FaShoppingCart, FaMobile, FaBolt, FaLock } from 'react-icons/fa'

function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: FaRocket,
      title: 'Smooth Animations',
      description: 'Beautiful scroll-based animations powered by Framer Motion for an engaging user experience.',
    },
    {
      icon: FaPalette,
      title: 'Modern Design',
      description: 'Clean and modern UI design with Tailwind CSS, following latest design trends and best practices.',
    },
    {
      icon: FaShoppingCart,
      title: 'Persistent Cart',
      description: 'Shopping cart data persists in localStorage, maintaining your selections across sessions.',
    },
    {
      icon: FaMobile,
      title: 'Fully Responsive',
      description: 'Optimized for all devices - desktop, tablet, and mobile with seamless responsive design.',
    },
    {
      icon: FaBolt,
      title: 'Lightning Fast',
      description: 'Built with Vite and React for blazing fast performance and instant hot module replacement.',
    },
    {
      icon: FaLock,
      title: 'Type Safe',
      description: 'Robust codebase with proper validation and error handling for a reliable experience.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Amazing{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes this Foxo clone special with cutting-edge features and modern technologies.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4"
              >
                <feature.icon className="text-2xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
