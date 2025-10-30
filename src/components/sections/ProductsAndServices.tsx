'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const serviceCategories = [
  {
    name: 'Power solutions & Services',
    id: 'power-solutions',
    content: {
      title: 'Power System Solutions',
      description: 'We specialize in delivering innovative power solutions tailored to both residential and commercial needs. From electrical infrastructure to smart grid solutions, our team ensures energy efficiency, reliability, and sustainability for every project.',
      services: [
        {
          title: 'Residential Power Systems',
          description: 'Tailored solutions for safe and efficient residential electrical power requirements and energy demands.'
        },
        {
          title: 'Commercial Power Systems',
          description: 'Robust electrical systems designed for commercial projects ensuring reliability and energy efficiency.'
        },
        {
          title: 'Energy Efficiency',
          description: 'Innovative solutions to enhance energy efficiency in your electrical power systems and projects.'
        },
        {
          title: 'Power Solutions',
          description: 'Expertly engineered systems for effective energy management and reliability.'
        },
      ],
      image: '/solar-panels-bw.jpg', // Placeholder - would need actual image
      imageAlt: 'Black and white solar panels'
    }
  },
  {
    name: 'Low Current Solution & Services',
    id: 'low-current',
    content: {
      title: 'Low Current Systems',
      description: 'Our low current solutions provide comprehensive integration of security, communication, and automation systems for modern buildings and facilities.',
      services: [
        {
          title: 'Security Systems',
          description: 'Advanced security solutions including CCTV, access control, and intrusion detection systems.'
        },
        {
          title: 'Communication Networks',
          description: 'Reliable voice and data communication infrastructure for seamless connectivity.'
        },
        {
          title: 'Building Management Systems',
          description: 'Integrated solutions for monitoring and controlling building operations efficiently.'
        },
      ],
      image: '/low-current-systems.jpg', // Placeholder - would need actual image
      imageAlt: 'Low current system installation'
    }
  },
  {
    name: 'ICT Solution & Service',
    id: 'ict-solutions',
    content: {
      title: 'Information & Communication Technology',
      description: 'Our ICT solutions leverage cutting-edge technology to enhance business operations, communication, and data management.',
      services: [
        {
          title: 'Network Infrastructure',
          description: 'Design and implementation of robust network infrastructure for reliable connectivity.'
        },
        {
          title: 'Data Center Solutions',
          description: 'Comprehensive data center services including design, build, and maintenance.'
        },
        {
          title: 'Cloud Services',
          description: 'Secure and scalable cloud solutions for efficient data storage and processing.'
        },
      ],
      image: '/ict-solutions.jpg', // Placeholder - would need actual image
      imageAlt: 'ICT infrastructure'
    }
  },
  {
    name: 'Internet of Things Solution & Services',
    id: 'iot-solutions',
    content: {
      title: 'IoT Integration & Solutions',
      description: 'We provide comprehensive IoT solutions that connect devices, systems, and data to create smarter, more efficient environments.',
      services: [
        {
          title: 'Smart Building Solutions',
          description: 'IoT-enabled building systems for enhanced efficiency, comfort, and security.'
        },
        {
          title: 'Industrial IoT',
          description: 'Connected solutions for manufacturing and industrial processes to improve productivity.'
        },
        {
          title: 'IoT Consulting',
          description: 'Strategic guidance on implementing IoT technologies for business transformation.'
        },
      ],
      image: '/iot-solutions.jpg', // Placeholder - would need actual image
      imageAlt: 'IoT connected devices'
    }
  },
  {
    name: 'MEP Services',
    id: 'mep-services',
    content: {
      title: 'Mechanical, Electrical & Plumbing',
      description: 'Our comprehensive MEP services ensure that building systems function efficiently, safely, and sustainably.',
      services: [
        {
          title: 'Mechanical Systems',
          description: 'Design and installation of HVAC and other mechanical systems for optimal building performance.'
        },
        {
          title: 'Electrical Engineering',
          description: 'Complete electrical system design and implementation for various project types.'
        },
        {
          title: 'Plumbing Solutions',
          description: 'Efficient water supply, drainage, and sanitary systems for buildings of all sizes.'
        },
      ],
      image: '/mep-services.jpg', // Placeholder - would need actual image
      imageAlt: 'MEP system installation'
    }
  },
  {
    name: 'Solar solutions',
    id: 'solar-solutions',
    content: {
      title: 'Solar Power Systems',
      description: 'We offer customized solar power systems that harness clean, renewable energy to reduce costs and promote sustainability for residential and commercial clients.',
      services: [
        {
          title: 'Residential Solar',
          description: 'Custom solar solutions for homes to reduce energy bills and carbon footprint.'
        },
        {
          title: 'Commercial Solar',
          description: 'Large-scale solar installations for businesses seeking energy independence.'
        },
        {
          title: 'Solar Maintenance',
          description: 'Ongoing support and maintenance services to ensure optimal system performance.'
        },
      ],
      image: '/solar-panels-blue.jpg', // Placeholder - would need actual image
      imageAlt: 'White and blue solar panels'
    }
  },
]

const ProductsAndServices = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
  const activeService = serviceCategories.find(category => category.id === activeCategory)?.content
  
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="products-services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange/5 blur-[100px] rounded-full" />
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="text-orange uppercase tracking-widest font-medium">What We Offer</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="heading-lg mt-4 mb-6">
            Products & <span className="orange-gradient">Services</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto mb-10">
            Explore our comprehensive range of specialized solutions designed to meet your needs
            with excellence and innovation.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12 overflow-x-auto py-2">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-sm transition-colors duration-300 whitespace-nowrap ${activeCategory === category.id ? 'bg-orange text-gray-dark' : 'bg-gray-dark text-white hover:bg-orange/20'}`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Service Content */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-serif font-bold text-white mb-4"
                >
                  {activeService.title}
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 mb-8"
                >
                  {activeService.description}
                </motion.p>
                
                <motion.div 
                  variants={containerVariants}
                  className="space-y-6"
                >
                  {activeService.services.map((service, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="bg-gray-dark/50 border border-orange/10 p-4 rounded-sm hover:border-orange/30 transition-colors duration-300"
                    >
                      <h4 className="text-lg font-medium text-orange mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-8"
                >
                  <a href="#contact" className="btn-primary inline-block">
                    Request Information
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Service Image */}
              <motion.div 
                variants={itemVariants}
                className="relative aspect-[4/3] rounded-tr-2xl rounded-bl-2xl overflow-hidden bg-gray-dark/50 border border-orange/10"
              >
                {/* Placeholder for actual image - in production, use actual images */}
                <div className="w-full h-full bg-gradient-to-br from-orange/20 via-gray-dark to-gray-dark flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-serif font-bold text-orange mb-2">{activeService.imageAlt}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProductsAndServices