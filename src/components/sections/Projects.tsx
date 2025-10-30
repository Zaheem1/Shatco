'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'MEP project with main contractor at NHC villa project',
    category: 'MEP Services',
    location: 'near Riyadh airport (Murcia)',
    description: 'Comprehensive MEP services for luxury villas, including HVAC, electrical, and plumbing systems integration.',
    image: '/mep-services.jpg',
  },
  {
    title: 'Low current project for SEC',
    category: 'Low Current Solutions',
    location: 'Saudi Electric Company, Abha',
    description: 'Implementation of advanced low current systems for improved security and communication infrastructure.',
    image: '/low-current-systems.jpg',
  },
  {
    title: 'RMU swap project for SEC',
    category: 'Power Solutions',
    location: 'Saudi Electric Company, Riyadh',
    description: 'Ring Main Unit replacement and upgrade for enhanced power distribution reliability.',
    image: '/solar-panels-bw.jpg',
  },
  {
    title: 'Solar Power Installation',
    category: 'Solar Solutions',
    location: 'Residential Complex, Jeddah',
    description: 'Installation of solar power systems for a residential complex, reducing energy costs and carbon footprint.',
    image: '/solar-panels-blue.jpg',
  },
  {
    title: 'ICT Infrastructure Upgrade',
    category: 'ICT Solutions',
    location: 'Corporate Office, Dammam',
    description: 'Complete overhaul of ICT infrastructure for improved connectivity, security, and performance.',
    image: '/ict-solutions.jpg',
  },
  {
    title: 'IoT Smart Building Implementation',
    category: 'IoT Solutions',
    location: 'Commercial Center, Riyadh',
    description: 'Integration of IoT solutions for building management, energy efficiency, and enhanced security systems.',
    image: '/iot-solutions.jpg',
  },
]

const categories = ['All', 'Power Solutions', 'Low Current Solutions', 'ICT Solutions', 'IoT Solutions', 'MEP Services', 'Solar Solutions']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
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
    <section id="projects" className="py-24 relative overflow-hidden">
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
            <span className="text-orange uppercase tracking-widest font-medium">Our Work</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="heading-lg mt-4 mb-6">
            Featured <span className="orange-gradient">Projects</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-300 max-w-3xl mx-auto mb-10">
            Explore some of our recent projects that showcase our expertise and commitment to excellence in power, renewable energy, MEP, low current, and ICT solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-sm transition-colors duration-300 ${activeCategory === category ? 'bg-orange text-gray-dark' : 'bg-gray-dark text-white hover:bg-orange/20'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-tr-2xl rounded-bl-2xl cursor-pointer"
              >
                {/* Project Image Placeholder - In a real project, use Next/Image */}
                <div className="aspect-[4/3] bg-gray-dark overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-orange/20 via-gray-dark to-gray-dark flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute top-4 right-4 bg-orange/90 text-gray-dark text-xs font-medium py-1 px-3 rounded-sm">
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-1">{project.title}</h3>
                    <div className="text-orange text-sm mb-2">{project.location}</div>
                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    <span className="text-orange text-sm flex items-center">
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects