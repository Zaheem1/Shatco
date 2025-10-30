'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Products & Services', href: '#products-services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-dark/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="relative z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-serif font-bold"
          >
   <div className="flex items-center justify-center  p-4 rounded-xl">
  <img
    src="/logo.png"
    alt="SHATCO Logo"
    className="h-16 w-auto drop-shadow-lg"
  />
</div>





          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-white hover:text-orange transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="#contact" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-between w-6 h-5">
            <span
              className={`h-0.5 w-full bg-orange transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`h-0.5 bg-orange transform transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${mobileMenuOpen ? 'w-0' : 'w-full'}`}
            />
            <span
              className={`h-0.5 w-full bg-orange transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-gray-dark/95 backdrop-blur-lg flex flex-col justify-center items-center z-40"
            >
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-xl text-white hover:text-orange transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                >
                  <Link
                    href="#contact"
                    className="btn-primary mt-4"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header