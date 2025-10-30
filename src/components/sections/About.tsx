'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-dark">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange/10 blur-[100px] rounded-full" />
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <motion.div variants={itemVariants} className="relative z-10">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-dark to-gray rounded-tr-3xl rounded-bl-3xl overflow-hidden border border-orange/20">
                {/* AI-generated image of renewable energy/solar panels */}
                <div className="w-full h-full bg-gradient-to-b from-gray-dark to-gray flex items-center justify-center p-4 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Solar panels with modern city background" 
                    className="w-full h-full object-cover rounded-tr-2xl rounded-bl-2xl" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-dark to-transparent p-6">
                    <div className="text-4xl font-serif font-bold text-orange mb-2">SHATCO</div>
                    <div className="text-lg text-orange-light">Renewable Energy Solutions</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              variants={itemVariants}
              className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-2 border-orange/30 rounded-tr-3xl rounded-bl-3xl -z-10" 
            />
            <motion.div 
              variants={itemVariants}
              className="absolute -top-6 -left-6 w-24 h-24 bg-orange/10 rounded-full blur-xl -z-10" 
            />
          </div>
          
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-orange uppercase tracking-widest font-medium">About Us</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="heading-lg mt-4 mb-6 text-gray-light">
              Your Strategic <span className="text-orange">Partner</span> in Excellence
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-light mb-6">
              At SHATCO, we are passionate about delivering top-tier solutions in power, renewable energy (Solar), MEP, Low Current, and ICT. Our commitment to innovation ensures that we not only meet but exceed your expectations with cutting-edge technology and superior service.
            </motion.p>
            
            <motion.h3 variants={itemVariants} className="text-xl font-bold text-orange mt-8 mb-4">
              Our Key Strengths
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-light">Expert Team</h4>
                  <p className="text-gray-light">Our experienced professionals bring years of experience to the table, ensuring a dedicated and customer-centric approach. Your success is our priority.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-light">Versatility</h4>
                  <p className="text-gray-light">We have a diverse skilled team ready to tackle complex projects. Our ability to adapt ensures your success, no matter how challenging the project is.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-light">Safety First</h4>
                  <p className="text-gray-light">We go beyond standards to guarantee a secure and healthy work environment. Strictly adhering to Occupational Health and Safety (OHS) standards, we prioritize the well-being of our team, making your projects not only successful but also safe.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gray rounded-lg border-l-4 border-orange">
                <div className="text-2xl font-bold text-orange mb-2">Contact Us</div>
                <div className="text-gray-light">Email: operations@shatcoksa.com</div>
                <div className="text-gray-light">Call: 00966 548120246</div>
              </div>
              
              <div className="p-6 bg-gray rounded-lg border-l-4 border-orange">
                <div className="text-2xl font-bold text-orange mb-2">Follow Us</div>
                <div className="flex space-x-4">
                  <a href="#" className="text-orange hover:text-orange-light transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-orange hover:text-orange-light transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-orange hover:text-orange-light transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 border-t border-orange/30">
                <div className="text-3xl font-bold text-orange mb-2">10+</div>
                <div className="text-sm text-gray-light">Years of Excellence</div>
              </div>
              
              <div className="p-4 border-t border-orange/30">
                <div className="text-3xl font-bold text-orange mb-2">200+</div>
                <div className="text-sm text-gray-light">Projects Completed</div>
              </div>
              
              <div className="p-4 border-t border-orange/30">
                <div className="text-3xl font-bold text-orange mb-2">50+</div>
                <div className="text-sm text-gray-light">Expert Team Members</div>
              </div>
              
              <div className="p-4 border-t border-orange/30">
                <div className="text-3xl font-bold text-orange mb-2">5+</div>
                <div className="text-sm text-gray-light">Major Sectors</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About