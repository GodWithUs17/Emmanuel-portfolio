import Container from "../ui/Container";
import { Github, Linkedin, X } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* 1. CALL TO ACTION SECTION - Now distinct from the footer */}
      <section className="bg-slate-900 py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Ready to build something great?
          </h2>

          <p className="mt-4 text-slate-200 text-base max-w-md mx-auto">
            I'm available for freelance projects and collaborations.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-purple-500/20"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* 2. ACTUAL FOOTER */}
      <footer className="bg-slate-950 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Brand Logo */}
          <h3 className="text-xl font-bold text-white tracking-tighter">
            Emmanuel<span className="text-purple-500"> Oguntoke</span>
          </h3>

          <p className="text-gray-200 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
            Building high-converting websites and scalable web applications
            for growing businesses.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-7">
  
  {/* GitHub */}
  <div className="group relative flex flex-col items-center">
    <a
      href="https://github.com/GodWithUs17"
      aria-label="View my Github Profile"
      className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-zinc-900 shadow-lg transition-all duration-300 hover:bg-purple-600 hover:text-white hover:-translate-y-1"
    >
      <Github className="w-5 h-5" />
    </a>
    {/* Tooltip */}
    <span className="absolute -top-10 scale-0 transition-all rounded bg-zinc-800 p-2 text-xs text-white group-hover:scale-100 font-medium">
      GitHub
    </span>
  </div>

  {/* LinkedIn */}
  <div className="group relative flex flex-col items-center">
    <a
      href="https://www.linkedin.com/in/oguntoke-emmanuel/"
      aria-label="View my LinkedIn Profile"
      className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-zinc-900 shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1"
    >
      <Linkedin className="w-5 h-5" />
    </a>
    <span className="absolute -top-10 scale-0 transition-all rounded bg-zinc-800 p-2 text-xs text-white group-hover:scale-100 font-medium">
      LinkedIn
    </span>
  </div>

  {/* Twitter/X */}
  <div className="group relative flex flex-col items-center">
    <a
      href="https://x.com/Godwithus_17"
      aria-label="View my Twitter Profile"

      className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-zinc-900 shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
    >
      
      <svg 
        viewBox="0 0 24 24" 
        className="w-4 h-4 fill-current" 
        aria-hidden="true"
  >    
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
     </svg>

    </a>
    <span className="absolute -top-10 scale-0 transition-all rounded bg-zinc-800 p-2 text-xs text-white group-hover:scale-100 font-medium">
      Twitter
    </span>
  </div>

   </div>
   <p className="text-gray-200 text-xs mt-10 border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Emmanuel Oguntoke. All rights reserved.
          </p>
  </div>
      </footer>
    </>
  );
}