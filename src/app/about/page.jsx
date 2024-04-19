"use client"
import Brain from "@/components/Brain"
import {motion, useInView} from "framer-motion"
import { useScroll } from "framer-motion"
import { useRef } from "react"

const styles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  html {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;
const AboutPage = () => {

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({container:containerRef});

  const skillRef = useRef()
  const isSkillRefInView = useInView(skillRef, {margin: "-100px"})

  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, {margin: "-100px"})
  


  return (
    <>
      {/* Add the CSS for hiding scrollbar */}
      <style>{styles}</style>
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y : "0%"}} transition={{duration: 1}}>
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex overflow-x-hidden " ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE  */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
                Hey there! With a background in mechatronics engineering from Azerbaijan State Oil Industry University and power electronics from Xi'an Jiatong University in China, I transitioned into a Full-stack Software Engineer after completing the Flatiron School. Over the past 2 years, I've been deeply involved in both software and hardware engineering.</p>
            {/* BIOGRAPHY QUOTE  */}
            <span className="italic">If There will be only one Software Engineer in the world it will be me!</span>
            <span className="italic text-red-600">else: return None</span>
            {/* BIOGRAPHY SIGN */}
            <div className="self-end">
            <svg width="185" height="77" viewBox="0 0 532 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* svg sign */}
            </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE  */}
            <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} :{}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* SKILLS LIST */}
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} :{}} transition={{delay:0.2}} className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Postman
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILLS SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration:3, ease:"easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
          {/* EXPERIENCE */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE  */}
            <motion.h1 initial={{x:"-300px"}}animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay:0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{x:"-300px"}}animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay:0.1}} className="">
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Junior Software Developer</div>
                {/* JOB DESCRIPTION */}
                <div className="p-3 text-sm italic">Collaborating with experienced professionals,gained hands-on experience in coding, testing, and debugging software applications.</div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 tetx-sm font-semibold">2021-2022</div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white tetx-sm font-semibold w-fit">IDRAK TECHNOLOGY PARK</div>

              </div>
              {/* CENTER */}
              <div className="w-1/6 ">
                {/* LINE  */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3"></div>
              {/* CENTER */}
              <div className="w-1/6 ">
                {/* LINE  */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Junior Software Developer</div>
                {/* JOB DESCRIPTION */}
                <div className="p-3 text-sm italic">Contributed to the delivery of high-quality software solutions, laying a solid foundation for my career growth in software engineering.</div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 tetx-sm font-semibold">2020-2021</div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white tetx-sm font-semibold w-fit">Sinteks Group of Companies</div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Junior Software Developer</div>
                {/* JOB DESCRIPTION */}
                <div className="p-3 text-sm italic">Crafted a robust database backend, optimizing data management and retrieval processes for enhanced efficiency. </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 tetx-sm font-semibold">2023</div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white tetx-sm font-semibold w-fit">ETC - Exam Trainin Center </div>

              </div>
              {/* CENTER */}
              <div className="w-1/6 ">
                {/* LINE  */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            
            
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-2/3 sticky top-0 z-30 xl:1/2 overflow-hidden">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
      </motion.div>
      </>
  )
}

export default AboutPage