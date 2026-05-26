'use client'

import Hero from '@/components/Hero'
import FeaturedWorks from '@/components/FeaturedWorks'
import About from '@/components/About'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWorks />
      <About />
      <CTA />
    </main>
  )
}
