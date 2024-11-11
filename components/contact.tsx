"use client"

import { FaPaperPlane } from "react-icons/fa"
import SeactionHeading from "./SeactionHeading"
import { sendEmail } from "@/lib/sendEmail"


function Contact() {



  return (
    <section className="mt-40 sm:mb-28  w-[min(100%, 38rem)] scroll-mt-28"
    id="contact"
    >
      <SeactionHeading>Contact</SeactionHeading>
      <p className="mt-10">Let's connect! Feel free to reach out to me via my email {" "}  <a href="mailto:Coday-aw@hotmail.com" className="underline">
      Coday-aw@hotmail.com
      </a> {" "} or via this form</p>
    <form className=" mt-10 flex flex-col gap-5" action={async (FormData) => {
      await sendEmail(FormData)
    }} >
       <input type="email" placeholder="Your email" maxLength={100} name="senderEmail" required className="h-14 rounded-lg px-4"/>
       <textarea name="senderMessage" placeholder="Your message"  maxLength={1000} required className="h-52 rounded-lg px-4 py-2"></textarea>
       <button name="message" className="bg-slate-900 w-32 px-5 py-3 rounded-full flex gap-2 items-center justify-center text-white hover:scale-105 group ">Submit <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1  transition-all opacity-80" /> </button>
     </form>
    </section>
  )
}
export default Contact