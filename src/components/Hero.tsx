'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
        >
          Digital Art Showcase
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Discover a world of creativity and imagination through stunning digital artwork
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="px-8 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Explore Gallery
          </button>
          <button className="px-8 py-3 border-2 border-accent hover:bg-accent/10 text-white rounded-lg font-semibold transition-all duration-200">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}
