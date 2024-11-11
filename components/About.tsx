"use client";
import { motion } from "framer-motion";
import SeactionHeading from "./SeactionHeading";


function About() {
  
  return (
    <motion.section 

    className="max-w-[40rem] sm:mt-40 flex flex-col gap-10 scroll-mt-28"
    id="about"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
    <SeactionHeading>About Me</SeactionHeading>
        <p className="text-center leading-7 ">
        My journey into web development began with a curiosity about how websites are 
        built and a desire to bring creative ideas to life through code. Over time, 
        I have developed a solid foundation in responsive design, accessibility, 
        and performance optimization, striving to build web experiences that are not only beautiful but also 
        functional and accessible to all users.In this portfolio, you'll find a showcase of my projects,
        ranging from simple landing pages to more complex web applications. 
        Each project reflects my growth as a developer and my commitment to continuously learning and improving my craft. 
        I am excited to share my work with you and look forward to connecting with like-minded individuals and potential collaborators in the tech community. 
        </p>
    </motion.section>
  )
}
export default About