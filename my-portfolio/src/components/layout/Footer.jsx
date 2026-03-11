// import Container from "../ui/Container";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-gray-300 py-20">

//       <div className="max-w-6xl mx-auto px-6 text-center">

//         {/* CTA */}

//         <h2 className="text-3xl font-semibold text-white">
//           Ready to build something great?
//         </h2>

//         <p className="mt-3 text-gray-400 text-sm max-w-md mx-auto">
//           I'm available for freelance projects and collaborations.
//         </p>

//         <a
//           href="#contact"
//           className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-md text-sm hover:bg-white hover:text-blue-600 transition-all duration-300"
//         >
//           Start a Project
//         </a>

//         {/* Divider */}

//         <div className="border-t border-gray-800 my-12"></div>

//         {/* Brand */}

//         <h3 className="text-xl font-bold text-white">
//           Emmanuel<span className="text-blue-500"> Oguntoke</span>
//         </h3>

//         <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
//           Building high-converting websites and scalable web applications
//           for growing businesses.
//         </p>

//         {/* Social */}

//         <div className="flex justify-center gap-6 mt-6 text-xl">

//           <a
//             href="https://github.com/GodWithUs17"
//             className="hover:text-white transition"
//           >
//             <i className="ri-github-line"></i>
//           </a>

//           <a
//             href="https://www.linkedin.com/in/oguntoke-emmanuel/"
//             className="hover:text-white transition"
//           >
//             <i className="ri-linkedin-line"></i>
//           </a>

//           <a
//             href="https://x.com/Godwithus_17"
//             className="hover:text-white transition"
//           >
//             <i className="ri-twitter-x-line"></i>
//           </a>

//         </div>

//         {/* Copyright */}

//         <p className="text-gray-600 text-xs mt-10">
//           © {new Date().getFullYear()} Emmanuel Oguntoke. All rights reserved.
//         </p>

//       </div>

//     </footer>
//   );
// }


import Container from "../ui/Container";

export default function Footer() {
  return (
    <>
      {/* 1. CALL TO ACTION SECTION - Now distinct from the footer */}
      <section className="bg-slate-900 py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Ready to build something great?
          </h2>

          <p className="mt-4 text-slate-400 text-base max-w-md mx-auto">
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

          <p className="text-gray-500 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
            Building high-converting websites and scalable web applications
            for growing businesses.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-10">
  
  {/* GitHub */}
  <div className="group relative flex flex-col items-center">
    <a
      href="https://github.com/GodWithUs17"
      className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-zinc-900 shadow-lg transition-all duration-300 hover:bg-purple-600 hover:text-white hover:-translate-y-1"
    >
      <i className="ri-github-line text-xl"></i>
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
      className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-zinc-900 shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1"
    >
      <i className="ri-linkedin-line text-xl"></i>
    </a>
    <span className="absolute -top-10 scale-0 transition-all rounded bg-zinc-800 p-2 text-xs text-white group-hover:scale-100 font-medium">
      LinkedIn
    </span>
  </div>

  {/* Twitter/X */}
  <div className="group relative flex flex-col items-center">
    <a
      href="https://x.com/Godwithus_17"
      className="w-7 h-7 flex items-center justify-center bg-white rounded-full text-zinc-900 shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
    >
      <i className="ri-twitter-x-line text-xl"></i>
    </a>
    <span className="absolute -top-10 scale-0 transition-all rounded bg-zinc-800 p-2 text-xs text-white group-hover:scale-100 font-medium">
      Twitter
    </span>
  </div>

   </div>
   <p className="text-gray-600 text-xs mt-10 border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Emmanuel Oguntoke. All rights reserved.
          </p>
  </div>
      </footer>
    </>
  );
}