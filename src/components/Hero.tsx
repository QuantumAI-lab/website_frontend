"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import quantumAnimation from "@/animation/quantum-hero.json";

export default function Hero() {
  return (
    /* background two columns */
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-32 md:pt-20 pb-12 overflow-hidden bg-transparent transition-colors duration-300">
      
      {/*left column for text content*/}
      <div className="w-full md:w-[50%] z-10 md:pl-10 lg:pl-20">
          
          <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
          >
              <span className="text-accent">EgQCC:</span> 
              <span className="block">Welcome to Egypt</span>
              <span>Quantum Computing Community!</span>
              
              {/* button container meet the team */}
              <div className="mt-8">
                  <Link href="/team">
                      <button className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-accent hover:bg-yellow-500 text-black text-lg md:text-xl font-bold rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(228,168,60,0.4)]">
                          Meet the Team 
                          <span className="text-2xl">→</span>
                      </button>
                  </Link>
              </div>
          </motion.h1>

          <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-lg lg:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl font-light leading-relaxed"
          >
              Fostering collaboration, democratizing knowledge, and empowering the next generation of quantum pioneers across Egypt.
          </motion.p>

      </div>


      {/*left column for the animation */}
      <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[50%] relative z-0 flex justify-center md:justify-end mt-12 md:mt-0 lg:-mt-40"
      >
           <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[1000px] h-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.2)] dark:drop-shadow-[0_0_80px_rgba(59,130,246,0.4)]">
             <Lottie 
                animationData={quantumAnimation} 
                loop={true} 
                autoplay={true}
             />
           </div>
      </motion.div>
      
    </section>
  );
}