"use client"

import Image from "next/image";
import {motion} from "framer-motion"
import AboutPage from "./about/page";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import PortfolioPage from "./portfolio/page";

const Homepage = () => {
  return (
    <>
    
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y : "0%"}} transition={{duration: 1}}>
      
   <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/prof.png" alt="" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center" >
      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold">Software Engineer: Architecting, Coding, Debugging, Innovating</h1>
      {/* DESC */}

      <p className="text-xl md:text-xl font-medium">Coding is my daily passion, driving me to excel and become the best in my field through dedication and determination.</p>
      <h2 className="text-3xl md:text-3xl font-serif">Nail Nadiroglu Osmanli - NewYork</h2>
      {/* BUTTONS */}
      <div className="w-full flex gap-4">
        <Link href="/portfolio"className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</Link>
        <Link href="/contact"className="p-4 rounded-lg ring-1 ring-black">Contact Me</Link>
      </div>
    </div>
  </div>
  
  </motion.div>
  <AboutPage/>
  <PortfolioPage/>
  </>
  )
};

export default Homepage;
