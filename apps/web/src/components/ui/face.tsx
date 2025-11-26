"use client"
import { motion } from 'framer-motion';

function Face() {
    return(
        <motion.img
      src="/main.jpeg"
      alt=""
      className="object-cover md:h-auto rounded-xl  md:mt-0 object-cover md:aspect-[3/4] md:w-[40vw]"
      initial={{ y: 50, opacity: 0 }}      // starts slightly below + transparent
      animate={{ y: 0, opacity: 1 }}       // moves to final position
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}                                    // smooth subtle slide
    /> 
    )
    
}

export default Face;