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
        My journey into web development started with a fascination for the inner
        workings of websites and a passion for turning creative ideas into
        reality through coding. Over the years, I have built a strong foundation
        in crafting responsive designs, ensuring accessibility, and optimizing
        performance. My goal is to create web experiences that are not only
        visually appealing but also highly functional and inclusive for all
        users. This portfolio highlights a range of projects, from elegant
        landing pages to intricate web applications. Each project showcases my
        evolution as a developer and my dedication to learning and refining my
        skills. I’m thrilled to share my work with you and look forward to
        connecting with fellow developers and potential collaborators in the
        tech community.
      </p>
    </motion.section>
  );
}
export default About;
