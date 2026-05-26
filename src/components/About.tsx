'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-4 bg-dark-light/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold gradient-text mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm a passionate digital artist with over 5 years of experience creating stunning visual content. My work spans across character design, landscapes, and abstract art.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in creating immersive digital worlds and compelling character illustrations using industry-standard tools and techniques.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {['Illustration', 'Character Design', 'Concept Art', 'Animation'].map((skill) => (
              <div key={skill} className="p-4 bg-accent/10 rounded-lg text-center">
                <p className="text-accent font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
