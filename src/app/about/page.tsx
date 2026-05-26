'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 gradient-text"
        >
          About Me
        </motion.h1>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="text-gray-300 leading-relaxed">
              I started my digital art journey 5 years ago with a passion for creating immersive visual experiences. What began as a hobby has evolved into a full-time passion, allowing me to work with amazing clients and create stunning artwork.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Photoshop', 'Clip Studio Paint', 'Procreate', 'Blender', 'After Effects', 'Illustrator'].map(skill => (
                <div key={skill} className="p-4 bg-accent/10 rounded-lg text-center border border-accent/20">
                  <p className="text-accent font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-bold text-lg">Freelance Digital Artist</h3>
                <p className="text-accent text-sm">2020 - Present</p>
                <p className="text-gray-300 mt-2">Creating custom artwork for clients worldwide</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-bold text-lg">Concept Artist</h3>
                <p className="text-accent text-sm">2019 - 2020</p>
                <p className="text-gray-300 mt-2">Designed concepts for game and film projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
