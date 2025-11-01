'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../../../components/sections/Projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundProject = projects.find(p => p.id === parseInt(params.id));
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Project not found, redirect to projects page
        router.push('/projects');
      }
    }
    setLoading(false);
  }, [params.id, router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(to bottom, #000000, #0a0a0a, #1a1200)" }}>
        <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return null; // This will not render as router will redirect
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
            <Link href="/projects" className="text-orange hover:text-orange/80 inline-flex items-center transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-orange"
            variants={itemVariants}
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="bg-black px-3 py-1 rounded-full text-sm text-gray-light flex items-center border border-orange/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </div>
            <div className="bg-black px-3 py-1 rounded-full text-sm text-gray-light flex items-center border border-orange/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {project.year}
            </div>
            <div className="bg-black px-3 py-1 rounded-full text-sm text-gray-light flex items-center border border-orange/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1).replace('-', ' ')}
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-orange">Project Overview</h2>
            <p className="text-gray-light mb-6">
              {project.fullDescription}
            </p>
            
            <h2 className="text-2xl font-bold mb-6 text-orange mt-12">Project Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-black p-6 rounded-lg border border-orange/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-orange">Technical Excellence</h3>
                <p className="text-gray">Our team implemented cutting-edge solutions that overcame significant technical challenges while maintaining the highest quality standards.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black p-6 rounded-lg border border-orange/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-orange">On-Time Delivery</h3>
                <p className="text-gray">Despite the complexity of the project, our team successfully delivered all components on schedule, meeting all client milestones.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black p-6 rounded-lg border border-orange/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-orange">Safety First</h3>
                <p className="text-gray">We maintained an impeccable safety record throughout the project, with zero incidents and full compliance with all safety regulations.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black p-6 rounded-lg border border-orange/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-3 text-orange">Client Satisfaction</h3>
                <p className="text-gray">The client expressed exceptional satisfaction with both the process and the final results, leading to additional project opportunities.</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12 flex space-x-4"
              variants={itemVariants}
            >
              <Link href="/#contact" className="btn-primary inline-block text-black bg-orange hover:bg-orange-dark transition-all duration-300 ease-in-out transform hover:scale-105">
                Discuss Your Project
              </Link>
              <Link href="/projects" className="btn-outline inline-block transition-all duration-300 ease-in-out transform hover:scale-105">
                View More Projects
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <div className="sticky top-24">
              <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden mb-8">
                <div 
                  className="aspect-[4/3] w-full"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              
              <div className="bg-black p-6 rounded-lg border border-orange/20">
                <h3 className="text-xl font-bold mb-4 text-orange">Similar Projects</h3>
                <div className="space-y-4">
                  {projects
                    .filter(p => p.category === project.category && p.id !== project.id)
                    .slice(0, 3)
                    .map(relatedProject => (
                      <Link 
                        key={relatedProject.id} 
                        href={`/projects/${relatedProject.id}`}
                        className="block group"
                      >
                        <div className="flex items-center">
                          <div 
                            className="w-16 h-16 rounded overflow-hidden flex-shrink-0 mr-3"
                            style={{
                              backgroundImage: `url(${relatedProject.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          ></div>
                          <div>
                            <h4 className="font-medium text-orange group-hover:text-orange/80 transition-colors">{relatedProject.title}</h4>
                            <p className="text-xs text-gray-light">{relatedProject.location}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}