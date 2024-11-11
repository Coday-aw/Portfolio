"use client"

import SeactionHeading from "./SeactionHeading"
import { skillsData } from "@/lib/data"
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };


function Skills() {
  return (
    <section className="mt-40 max-w-[45rem] scroll-mt-28" id="skills">
        <SeactionHeading>my skills</SeactionHeading>

        <div className="mt-10">
            <ul className="flex flex-wrap gap-5 justify-center ">
                {
                    skillsData.map((skill, index) => (
                        <motion.li key={index} className="bg-white px-5 py-2 rounded-lg " 

                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                          once: true,
                        }}
                        custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}
export default Skills