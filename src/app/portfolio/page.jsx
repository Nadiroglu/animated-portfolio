"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Flask-React Event-Ticketing",
    desc: "Building an event-ticketing platform enabling users to browse, book tickets, and explore events. Features include user profiles, event creation tools for organizers, and payment integration for seamless transactions, emphasizing usability and scalability.",
    img: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/Nadiroglu/event-website-project",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Social-Media-App",
    desc: "Developing a social media platform for sharing posts, connecting users, and fostering community interaction with personalized profiles and dynamic feeds.",
    img: "https://images.pexels.com/photos/4553370/pexels-photo-4553370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/sethspr/social-media-app-p2/graphs/contributors",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Python Story Gaming",
    desc: "Creating a Python-based story gaming app with interactive narratives, choices, and outcomes. Utilizing Python's logic for branching stories, user interactions, and immersive gameplay experience, merging storytelling with coding.",
    img: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/Nadiroglu/phase-3-project",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Restaurant Website",
    desc: "Developing a restaurant website featuring menus, reservations, and location information. Emphasizing responsive design, enticing visuals, and user-friendly navigation for an engaging dining experience.",
    img: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/brentnettles/Flatiron-Phase1-Project/graphs/contributors",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Crazy Project",
    desc: "Creating a fully responsive website with dynamic layouts that adapt seamlessly to different devices. Implementing fluid design principles, media queries, and flexible components for optimal user experience across all screens.",
    img: "https://images.pexels.com/photos/5650644/pexels-photo-5650644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://github.com/Nadiroglu/final-project",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white text-center ">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-lg">
                    <Image src={item.img} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px" className="rounded-lg"/>
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;