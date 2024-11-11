"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function Intro() {
  return (
    <section
      className="max-w-[50rem] text-center sm:mb-0 mb-28 scroll-mt-40"
      id="home"
    >
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] "
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold"> Welcome to my portfolio!</span> my name is{" "}
        <span className="font-bold">Coday</span>, a passionate and dedicated{" "}
        {""}
        <span className="font-bold">frontend developer</span> {""}
        student with a keen eye for detail and a love for creating visually
        appealing and user-friendly web applications.
      </motion.h1>

      <motion.div
        className="flex gap-2 flex-col sm:flex-row justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <button className=" group text-white bg-gray-900 px-8 py-3 rounded-full hover:scale-110 active:scale-105 transition ">
          <Link href="#contact">
            contact me here{" "}
            <BsArrowRight className="inline opacity-65 group-hover:translate-x-2 transition" />
          </Link>
        </button>

        <button className=" group bg-white px-8 py-3 rounded-full hover:scale-110 active:scale-105 transition border border-black/10 ">
          <a href="/CV-Coday.pdf" download>
            Download CV{" "}
            <HiDownload className="inline opacity-65 group-hover:translate-y-1" />
          </a>
        </button>

        <button className="bg-white rounded-full p-3 hover:scale-110 active:scale-105 transition border border-black/10 ">
          <a
            href="https://www.linkedin.com/in/coday-awahmed-58783628b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl inline" />
          </a>
        </button>
        <button className="bg-white rounded-full p-3 hover:scale-110 active:scale-105 transition border border-black/10">
          <a
            href="https://github.com/Coday-aw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="text-2xl inline" />
          </a>
        </button>
      </motion.div>
    </section>
  );
}
export default Intro;
