"use server"
import { Resend } from "resend"
import { validateString } from "@/lib/helperFunction"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {

    const message = formData.get("senderMessage")
    const email = formData.get("senderEmail")

    if(!validateString(email, 100)) {
        return{
            error: "Invalid email"
        }
    }

    if(!validateString(message, 1000)) {
        return {
            error: "Invalid message"
        }
    }

    resend.emails.send({
        from: "delivered@resend.dev",
        to: "coday-aw@hotmail.com",
        subject: "New message from portfolio",
        reply_to: email as string,
        text: message as string

    })
}