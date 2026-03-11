// import { useState } from "react";
// import Container from "../ui/Container";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [emailError, setEmailError] = useState("");

//    // Email validation function
//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     setEmailError("");

//     const formData = new FormData(e.target);

//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       message: formData.get("message"),
//     };

//      // Validate email
//     if (!validateEmail(data.email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }

//     setLoading(true);


//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         setMessage("Message sent successfully.");
//         e.target.reset();
//       } else {
//         setMessage("Something went wrong.");
//       }
//     } catch {
//       setMessage("Network error. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <section id="contact" className="bg-[#FAFAFA] py-20">
//       <Container>

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
//             Get In Touch
//           </h2>

//           <div className="w-16 h-1 bg-[#1F6BFF] mx-auto mt-4 rounded"></div>
//           <p className="text-zinc-600 text-sm sm:text-base md:text-base lg:text-lg mt-3 max-w-xl mx-auto">
//             Tell me about your project — I'll respond within 24 hours.
//            </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">

//           {/* LEFT COLUMN */}
//           <div>

//             <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
//               Let's Work Together
//             </h3>

//             <p className="text-zinc-600 mb-10 leading-relaxed">
//               I'm available for freelance and full-time opportunities.
//               If you have a project idea or want to build something impactful,
//               feel free to reach out.
//             </p>

//             <div className="space-y-6">

//               {/* Email */}
//               <div className="flex items-center gap-4">
//                 <div className="w-11 h-11 flex items-center justify-center bg-[#1F6BFF] text-white rounded-full">
//                   <Mail size={18} />
//                 </div>

//                 <div>
//                   <p className="font-semibold text-zinc-900">Email</p>
//                   <p className="text-zinc-600">oguntokeemmanuel57@gmail.com</p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center gap-4">
//                 <div className="w-11 h-11 flex items-center justify-center bg-[#1F6BFF] text-white rounded-full">
//                   <Phone size={18} />
//                 </div>

//                 <div>
//                   <p className="font-semibold text-zinc-900">Phone</p>
//                   <p className="text-zinc-600">+1 (234) 90-2226-6417</p>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex items-center gap-4">
//                 <div className="w-11 h-11 flex items-center justify-center bg-[#1F6BFF] text-white rounded-full">
//                   <MapPin size={18} />
//                 </div>

//                 <div>
//                   <p className="font-semibold text-zinc-900">Location</p>
//                   <p className="text-zinc-600">Lagos, Nigeria</p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100">

//             <form onSubmit={handleSubmit} className="space-y-6">

//               <div>
//                 <label className="block font-semibold mb-2 text-sm">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your full name"
//                   required
//                   className="w-full border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6BFF]"
//                 />
//               </div>

//               <div>
//                 <label className="block font-semibold mb-2 text-sm">
//                   Email Address
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   required
//                   className="w-full border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6BFF]"
//                 />
//               </div>

//               <div>
//                 <label className="block font-semibold mb-2 text-sm">
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="5"
//                   placeholder="Enter your message"
//                   required
//                   className="w-full border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1F6BFF]"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#1F6BFF] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>

//               {message && (
//                 <p className="text-sm text-center text-zinc-600">
//                   {message}
//                 </p>
//               )}

//             </form>

//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }




import { useState, useRef } from "react";
import Container from "../ui/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


export default function Contact({ refProp }) {

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");   // ✅ NEW (success | error)
  const [emailError, setEmailError] = useState("");

  const toastRef = useRef(null);  
  
    // ✅ reCAPTCHA
  const { executeRecaptcha } = useGoogleReCaptcha();
// ✅ NEW (scroll target)

  // Email validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatusMessage("");
    setStatusType("");
    setEmailError("");

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    if (!validateEmail(data.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

      // ✅ reCAPTCHA check
    if (!executeRecaptcha) {
      setStatusMessage("reCAPTCHA not yet available");
      setStatusType("error");

      // Clear message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 5000);

      return;
    }


    setLoading(true);

    try {

      const token = await executeRecaptcha("contact_form");
      console.log(token);
      // Add token to your data
      const payload = { ...data, recaptchaToken: token };

      const res = await fetch("/api/contact", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      if (res.ok) {

        setStatusMessage("Message sent successfully.");
        setStatusType("success");             // ✅ NEW
        e.target.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
          setStatusMessage("");
          setStatusType("");
        }, 5000);

      } else {

        setStatusMessage("Something went wrong.");
        setStatusType("error");

        // Clear message after 5 seconds
        setTimeout(() => {
          setStatusMessage("");
          setStatusType("");
        }, 5000);

      }

    } catch {

      setStatusMessage("Network error. Please try again.");
      setStatusType("error");

      // Clear message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 5000);

    }

    setLoading(false);

    // ✅ Auto scroll to toast
    setTimeout(() => {
      toastRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);

  };

  return (
    <section ref={refProp} id="contact" className="bg-[#FAFAFA] py-24 scroll-mt-24">

      <Container>

        {/* Header */}

        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            Get In Touch
          </h2>

          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded"></div>

          <p className="text-zinc-600 text-sm sm:text-base lg:text-lg mt-3 max-w-xl mx-auto">
            Tell me about your project — I'll respond within 24 hours.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}

          <div>

            <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
              Let's Work Together
            </h3>

            <p className="text-zinc-600 mb-10 leading-relaxed">
              I'm available for freelance and full-time opportunities.
              If you have a project idea or want to build something impactful,
              feel free to reach out.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 flex items-center justify-center bg-purple-600 text-white rounded-full">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">Email</p>
                  <p className="text-zinc-600">oguntokeemmanuel57@gmail.com</p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 flex items-center justify-center bg-purple-600 text-white rounded-full">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">Phone</p>
                  <p className="text-zinc-600">+234 902 226 6417</p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 flex items-center justify-center bg-purple-600 text-white rounded-full">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="font-semibold text-zinc-900">Location</p>
                  <p className="text-zinc-600">Lagos, Nigeria</p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>

                <label className="block font-semibold mb-2 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

              </div>

              <div>

                <label className="block font-semibold mb-2 text-sm">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
                  ${emailError ? "border-red-500 focus:ring-red-500" : "border-zinc-300 focus:ring-purple-600"}`}
                />

                {emailError && (
                  <p className="text-red-500 text-sm mt-1">
                    {emailError}
                  </p>
                )}

              </div>

              <div>

                <label className="block font-semibold mb-2 text-sm">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                  className="w-full border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>

              </div>

              {/* <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#1F6BFF] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {loading ? (
                  <> */}
                    {/* ✅ Loading Spinner */}
                    {/* <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button> */}

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg 
                ${loading 
                  ? "bg-zinc-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 hover:shadow-purple-500/25 hover:-translate-y-0.5 active:scale-95"
                }`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>

            </form>

          </div>

        </div>

        {/* ✅ Toast Message */}

        {statusMessage && (

          <div
            ref={toastRef}
            className={`mt-10 max-w-xl mx-auto text-center p-4 rounded-lg text-sm font-medium
            ${statusType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
            }`}
          >
            {statusMessage}
          </div>

        )}

      </Container>

    </section>
  );
}