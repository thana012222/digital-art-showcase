'use client'

import { useState } from 'react'
import { FiSearch, FiMapPin, FiLoader } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface SearchCityProps {
  onSearch: (city: string) => void
  isLoading: boolean
}

export default function SearchCity({ onSearch, isLoading }: SearchCityProps) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input.trim())
      setInput('')
    }
  }

  const popularCities = ['Bangkok', 'New York', 'London', 'Tokyo', 'Sydney', 'Dubai']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-lg opacity-10 blur"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative flex items-center bg-dark-light border-2 border-accent/30 rounded-lg hover:border-accent/50 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search for a city..."
              className="flex-1 bg-transparent px-6 py-4 text-white placeholder-gray-400 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-4 text-accent hover:text-accent-light transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <FiLoader className="text-xl animate-spin" />
              ) : (
                <FiSearch className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Popular Cities */}
      <div className="space-y-3">
        <p className="text-sm text-gray-400 font-semibold">Popular Cities</p>
        <div className="flex flex-wrap gap-2">
          {popularCities.map((cityName) => (
            <motion.button
              key={cityName}
              onClick={() => {
                onSearch(cityName)
              }}
              disabled={isLoading}
              className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-sm hover:bg-accent/20 hover:border-accent/50 transition-all duration-200 disabled:opacity-50 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMapPin size={14} className="group-hover:text-accent transition-colors" />
              {cityName}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
