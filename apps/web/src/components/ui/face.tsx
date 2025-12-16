"use client"
import { motion } from 'framer-motion';

function Face() {
    return(
        <motion.img
      src="/main.png"
      alt=""
      className="object-cover md:h-auto rounded-xl  md:mt-0 object-cover md:aspect-[3/4] md:w-[40vw]"
      initial={{ y: 50, opacity: 0 }}      
      animate={{ y: 0, opacity: 1 }}      
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}                                  
    /> 
    )
    
}

export default Face;