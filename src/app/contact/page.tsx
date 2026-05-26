'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 gradient-text"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <FiMail className="text-accent text-2xl flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-300">your.email@example.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FiPhone className="text-accent text-2xl flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FiMapPin className="text-accent text-2xl flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-gray-300">Your City, Country</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-dark-light border border-accent/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-dark-light border border-accent/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full bg-dark-light border border-accent/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  )
}
