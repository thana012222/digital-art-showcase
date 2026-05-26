'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const artworks = [
  { id: 1, title: 'Mystic Forest', category: 'Landscape', image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop' },
  { id: 2, title: 'Portrait Study', category: 'Character', image: 'https://images.unsplash.com/photo-1535720221318-6f14362f6432?w=500&h=500&fit=crop' },
  { id: 3, title: 'Abstract Dreams', category: 'Abstract', image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop' },
  { id: 4, title: 'Ocean Waves', category: 'Landscape', image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop' },
  { id: 5, title: 'Character Design', category: 'Character', image: 'https://images.unsplash.com/photo-1535720221318-6f14362f6432?w=500&h=500&fit=crop' },
  { id: 6, title: 'Digital Paint', category: 'Abstract', image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop' },
]

const categories = ['All', 'Landscape', 'Character', 'Abstract']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = selectedCategory === 'All'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory)

  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 gradient-text"
        >
          Gallery
        </motion.h1>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-accent text-white'
                  : 'bg-dark-light text-gray-300 hover:bg-accent/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((art) => (
            <motion.div
              key={art.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative overflow-hidden rounded-lg bg-dark-light hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-xl font-bold">{art.title}</h3>
                    <p className="text-accent">{art.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
