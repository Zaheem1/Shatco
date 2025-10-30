'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-orange/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange/10 blur-[120px]" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255, 131, 3, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 131, 3, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-orange uppercase tracking-widest font-medium">Welcome to SHATCO</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-xl mb-6"
            >
              Your <span className="orange-gradient">Strategic Partner</span> in Excellence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              At SHATCO, we are passionate about delivering top-tier solutions in power, renewable energy (Solar), MEP, Low Current, and ICT. 
              Our commitment to innovation ensures that we not only meet but exceed your expectations with cutting-edge technology and superior service.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#products-services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="#about" className="btn-outline">
                Learn More
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Hero Image Placeholder - In a real project, use Next/Image */}
              <div className="w-full h-full bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-tr-3xl rounded-bl-3xl overflow-hidden flex flex-col items-center justify-center">
                <div className="text-6xl font-serif font-bold orange-gradient mb-2">SHATCO</div>
                <div className="text-xl font-serif text-gray-300 text-center">مؤسسة شموخ التقدم للمقاولات</div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-orange/50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-orange/50" />
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-orange text-sm mb-2">Scroll Down</span>
          <div className="w-0.5 h-8 bg-orange/50" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero