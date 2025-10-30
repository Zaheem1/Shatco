'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ProductsAndServices from '@/components/sections/ProductsAndServices'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      
      {/* Gradient Section Combining Services and Projects */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-dark via-gray to-gray-light opacity-10 z-0" />
        <ProductsAndServices />
        <Projects />
      </div>
      
      <Contact />
      <Footer />
    </main>
  )
}