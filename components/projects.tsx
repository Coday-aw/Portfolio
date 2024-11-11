import SeactionHeading from "./SeactionHeading"
import { projectsData } from "@/lib/data"
import React from "react"
import Project from "./project"

function Projects() {
  return (
   <section className="mt-40 scroll-mt-28" id="projects">
    <SeactionHeading>my projects</SeactionHeading>
    <div>
        {
         projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
        
         ))}
    </div>
   </section>
  )
}
export default Projects

