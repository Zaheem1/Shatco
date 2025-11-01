'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { serviceCategories } from '../../../components/sections/ProductsAndServices'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundService = serviceCategories.find(s => s.id === params.id)
      if (foundService) {
        setService(foundService)
      } else {
        // Service not found, redirect to services page
        router.push('/services')
      }
    }
    setLoading(false)
  }, [params.id, router])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  if (loading) {
    return (
      <div className="bg-gray-dark min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!service) {
    return null // This will not render as router will redirect
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ background: "linear-gradient(to bottom, #000000, #0a0a0a, #1a1200)" }}>
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mb-16">
          <motion.div variants={itemVariants} className="mb-2">
            <Link href="/#products-services" className="text-orange hover:text-orange/80 inline-flex items-center transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Services
            </Link>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-orange"
            variants={itemVariants}
          >
            {service.content.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-gray-light max-w-3xl"
            variants={itemVariants}
          >
            {service.content.description}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-orange">Our Approach</h2>
            <p className="text-gray-light mb-6">
              At SHATCO, we take a comprehensive approach to {service.content.title.toLowerCase()}. Our team of experts works closely with clients to understand their specific needs and challenges, developing tailored solutions that deliver exceptional results.
            </p>
            
            <h2 className="text-2xl font-bold mb-6 text-orange mt-12">Key Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.content.services.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-black p-6 rounded-lg border border-orange/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 }, borderColor: 'rgba(255, 165, 0, 0.5)' }}
                >
                  <h3 className="text-xl font-bold mb-3 text-orange">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-orange mt-12">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-light">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Expert team with years of industry experience</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Customized solutions tailored to your specific requirements</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Cutting-edge technology and innovative approaches</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Commitment to quality, safety, and client satisfaction</span>
              </li>
            </ul>
            
            <motion.div 
              className="mt-12"
              variants={itemVariants}
            >
              <Link href="/#contact" className="btn-primary inline-block transition-all duration-300 ease-in-out transform hover:scale-105 text-black bg-orange hover:bg-orange-dark">
                Request a Consultation
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <div className="sticky top-24">
              <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden mb-8">
                <Image 
                  src={service.content.image}
                  alt={service.content.imageAlt}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="bg-gray-dark p-6 rounded-lg border border-orange/10">
                <h3 className="text-xl font-bold mb-4 text-orange">Get in Touch</h3>
                <p className="text-gray-300 mb-4">Interested in our {service.content.title.toLowerCase()}? Contact us today to discuss your project requirements.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-light">+966 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-light">info@shatco.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
