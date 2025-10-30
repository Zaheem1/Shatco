'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    title: 'Strategic Consulting',
    description: 'Expert guidance to navigate complex business challenges and identify opportunities for growth and innovation.',
    icon: '💼',
  },
  {
    title: 'Premium Design',
    description: 'Sophisticated design solutions that blend aesthetics with functionality to create memorable brand experiences.',
    icon: '✨',
  },
  {
    title: 'Luxury Development',
    description: 'Meticulous development of high-end products and services that embody excellence and attention to detail.',
    icon: '🏆',
  },
  {
    title: 'Elite Marketing',
    description: 'Targeted marketing strategies that position your brand at the forefront of your industry and captivate your audience.',
    icon: '📈',
  },
  {
    title: 'Bespoke Solutions',
    description: 'Custom-tailored solutions designed specifically to address your unique challenges and requirements.',
    icon: '🔧',
  },
  {
    title: 'Ongoing Support',
    description: 'Dedicated support and maintenance to ensure the continued success and optimization of your investments.',
    icon: '🛡️',
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
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
    <section id="services" className="py-24 relative overflow-hidden bg-black-light/30">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] rounded-full" />
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="text-gold uppercase tracking-widest font-medium">Our Services</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="heading-lg mt-4 mb-6">
            Premium <span className="gold-gradient">Solutions</span> for Discerning Clients
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive suite of high-end services designed to elevate your business 
            and create exceptional experiences for your customers.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-black-light to-black-dark border border-gold/10 rounded-tr-2xl rounded-bl-2xl p-8 hover:border-gold/30 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-6 bg-gold/10 w-16 h-16 rounded-tr-xl rounded-bl-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <a href="#contact" className="btn-primary inline-block">
              Request a Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services