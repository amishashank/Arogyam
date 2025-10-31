import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How does the cart persistence work?',
      answer: 'The shopping cart uses localStorage to save your items. This means your cart will persist even if you refresh the page, close your browser, or come back later. All cart data is stored locally on your device.',
    },
    {
      question: 'Are the animations optimized for performance?',
      answer: 'Yes! All animations are built with Framer Motion and use GPU-accelerated transforms and opacity changes. The animations respect the "prefers-reduced-motion" setting for accessibility and provide smooth 60fps performance.',
    },
    {
      question: 'Is the medicine store fully functional?',
      answer: 'Absolutely! You can add medicines to your cart, update quantities, remove items, and see real-time total calculations. The cart validates stock levels and prevents adding more items than available.',
    },
    {
      question: 'How responsive is the design?',
      answer: 'The entire website is fully responsive and works seamlessly on all device sizes - from mobile phones to large desktop screens. The layout adapts intelligently using Tailwind CSS responsive utilities.',
    },
    {
      question: 'What technologies power this website?',
      answer: 'This Foxo clone is built with React 18, Vite for build tooling, Tailwind CSS for styling, Framer Motion for animations, React Router for navigation, and localStorage for data persistence.',
    },
    {
      question: 'Can I use this code for my own projects?',
      answer: 'This is a demonstration project showcasing modern web development techniques. The code demonstrates best practices for animations, state management, and responsive design that you can adapt for your own projects.',
    },
  ]

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about this Foxo clone and its features.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                whileHover={{ backgroundColor: "rgb(243, 244, 246)" }}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="text-gray-500 flex-shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection