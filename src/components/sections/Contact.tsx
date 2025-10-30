'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }
  
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
    <section id="contact" className="py-24 relative overflow-hidden bg-black-light/30">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gold/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] rounded-full" />
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="text-gold uppercase tracking-widest font-medium">Get In Touch</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="heading-lg mt-4 mb-6">
            Contact <span className="gold-gradient">Us</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your business? Contact us today to discuss how our premium solutions 
            can help you achieve your goals and exceed expectations.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Send Us a Message</h3>
              <p className="text-gray-400">Fill out the form below and our team will get back to you promptly.</p>
            </motion.div>
            
            <motion.form 
              variants={itemVariants} 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-dark border border-gold/20 text-white rounded-sm focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-dark border border-gold/20 text-white rounded-sm focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black-dark border border-gold/20 text-white rounded-sm focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-dark border border-gold/20 text-white rounded-sm focus:outline-none focus:border-gold transition-colors duration-300"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Consultation">Project Consultation</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Support Request">Support Request</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black-dark border border-gold/20 text-white rounded-sm focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
                
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-gold/20 border border-gold/30 text-gold rounded-sm text-center"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400">Reach out to us directly or visit our office.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Our Location</h4>
                  <p className="text-gray-400">123 Luxury Avenue, Suite 500<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Email Us</h4>
                  <p className="text-gray-400">info@shatco.com<br />support@shatco.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="h-64 bg-black-dark border border-gold/20 rounded-sm overflow-hidden">
              {/* Map Placeholder - In a real project, use a map component */}
              <div className="w-full h-full bg-black-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-serif font-bold text-gold mb-2">Map Location</div>
                  <div className="text-sm text-gold/70">Interactive map would be displayed here</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact