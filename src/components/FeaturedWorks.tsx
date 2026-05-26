'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const works = [
  {
    id: 1,
    title: 'Mystic Forest',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Portrait Study',
    category: 'Character',
    image: 'https://images.unsplash.com/photo-1535720221318-6f14362f6432?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Abstract Dreams',
    category: 'Abstract',
    image: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=500&fit=crop',
  },
]

export default function FeaturedWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Featured Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-dark-light hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-accent mb-2">{work.category}</p>
                <h3 className="text-xl font-semibold">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
