'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-2xl mx-auto text-center bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-2xl p-12 border border-accent/30"
      >
        <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
        <p className="text-gray-300 mb-8">
          Let's work together to bring your vision to life. Get in touch to discuss your project!
        </p>
        <button className="px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
          Get in Touch
        </button>
      </motion.div>
    </section>
  )
}
