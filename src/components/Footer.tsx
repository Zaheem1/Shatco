'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Products & Services', href: '#products-services' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Products & Services',
      links: [
        { name: 'Power Solutions', href: '#products-services' },
        { name: 'Low Current Solutions', href: '#products-services' },
        { name: 'ICT Solutions', href: '#products-services' },
        { name: 'IoT Solutions', href: '#products-services' },
        { name: 'Solar Solutions', href: '#products-services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Privacy Policy', href: '#privacy' },
      ],
    },
  ]
  
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
  ]

  return (
    <footer className="bg-black-dark relative overflow-hidden pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[100px] rounded-full" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-3xl font-serif font-bold">
                <span className="gold-gradient">SHATCO</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Delivering premium solutions and luxury experiences that exceed expectations and elevate your business to new heights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-sm bg-black-light border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-black-dark transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Simple placeholder for social icons */}
                  <div className="w-5 h-5 flex items-center justify-center">
                    {social.icon.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-medium mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SHATCO. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
            <Link href="#terms" className="hover:text-gold transition-colors duration-300">Terms of Service</Link>
            <Link href="#privacy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link>
            <Link href="#cookies" className="hover:text-gold transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer