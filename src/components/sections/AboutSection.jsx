import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Foxo 
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              This is a pixel-perfect clone of the Foxo.club website, featuring all the stunning scroll-based animations, smooth transitions, and curved connection lines that make modern web experiences truly memorable.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Built with React, Tailwind CSS, and Framer Motion, this project showcases the power of modern web technologies combined with a fully functional medicine store powered by localStorage.
            </p>

            <div className="space-y-4">
              {['Scroll-based animations', 'Parallax effects', 'Persistent cart system', 'Responsive design'].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Modern Healthcare
                  </h3>
                  <p className="text-gray-600">
                    Bringing technology to medicine
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
