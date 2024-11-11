"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useTransform, motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  gitHubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
    >
      <section className=" bg-gray-100  max-w-[40rem] border border-black/5 overflow-hidden sm:pr-8 relative mt-10 hover:bg-gray-200  ">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  sm:max-w-[50%] flex flex-col h-full ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-2 leading-relaxed text-gray-700">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <a href={gitHubUrl} target="_blank" ref="noopener noreferrer">
          <Image
            src={imageUrl}
            alt="projects"
            quality={95}
            className="
     absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-lg
     transition 
     hover:scale-105
    
   


    "
          />
        </a>
      </section>
    </motion.div>
  );
}

export default Project;
