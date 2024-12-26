"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/lib/sendEmail";
import SeactionHeading from "./SeactionHeading";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await sendEmail(formData);
    setIsSubmitted(true);
  };

  return (
    <section
      className="mt-40 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-28"
      id="contact"
    >
      {isSubmitted ? (
        <p className="text-xl text-green-400">Thank you for your message!</p>
      ) : (
        <>
          <SeactionHeading>Contact</SeactionHeading>
          <p className="mt-10">
            Lets connect! Feel free to reach out to me via my email{" "}
            <a href="mailto:Coday-aw@hotmail.com" className="underline">
              Coday-aw@hotmail.com
            </a>{" "}
            or via this form
          </p>
          <form className=" mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              maxLength={100}
              name="senderEmail"
              required
              className="h-14 rounded-lg px-4"
            />
            <textarea
              name="senderMessage"
              placeholder="Your message"
              maxLength={1000}
              required
              className="h-52 rounded-lg px-4 py-2"
            ></textarea>
            <button
              name="message"
              className="bg-slate-900 w-32 px-5 mb-32 py-3 rounded-full flex gap-2 items-center justify-center text-white hover:scale-105 group "
            >
              Submit{" "}
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1  transition-all opacity-80" />{" "}
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default Contact;
