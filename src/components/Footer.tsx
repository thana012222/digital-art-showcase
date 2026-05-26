'use client'

import { FiTwitter, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">ArtStudio</h3>
            <p className="text-gray-400">Creating stunning digital art experiences</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><FiTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><FiInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><FiLinkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><FiMail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-accent/20 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Digital Art Showcase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
