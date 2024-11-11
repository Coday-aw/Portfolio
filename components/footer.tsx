import { ModeToggle } from "./mode-toggle"

function Footer() {
  return (
    <footer className="mb-10 px-5 text-center text-gray-600">
        <small>&copy; 2024 Coday. All rights reserved</small>
        <p className="mt-2">
            <span className="font-bold">About this website:</span> {" "}
            Built with Next.js, Tailwind CSS, TypeScript, framer motion for animations, react email & resend, vercel for hosting.
        </p>
        <div>
        </div>
    </footer>
  )
}
export default Footer