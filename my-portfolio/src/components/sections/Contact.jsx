import { useState, useRef, useEffect } from "react";
import Container from "../ui/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// --- SUB-COMPONENT FOR THE FORM ---
// This handles the reCAPTCHA hook safely inside the Provider
function ContactForm({ handleSubmit, loading, emailError, statusMessage, statusType, toastRef }) {
  const { executeRecaptcha } = useGoogleReCaptcha();

// ✅ ADD THIS PART TO LOG WHEN READY
  useEffect(() => {
    if (executeRecaptcha) {
      console.log("✅ reCAPTCHA is loaded and ready to protect your form!");
    }
  }, [executeRecaptcha]);

  const handleFormSubmit = (e) => {
    // Pass the reCAPTCHA function to your main handler
    handleSubmit(e, executeRecaptcha);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div>
        <label className="block font-semibold mb-2 text-sm">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          required
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
          ${emailError ? "border-red-500 focus:ring-red-500" : "border-zinc-300 focus:ring-purple-600"}`}
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-2 text-sm">Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Enter your message"
          required
          className="w-full border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
        ></textarea>
      </div>

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
  );
}

// --- MAIN EXPORT COMPONENT ---
export default function Contact({ refProp }) {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isIntersecting, setIntersecting] = useState(false); // ✅ The "Magic Switch"
  
  const toastRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ Intersection Observer Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect(); // Stop watching once loaded
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // ✅ handleSubmit now receives executeRecaptcha from the sub-component
  const handleSubmit = async (e, executeRecaptcha) => {
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

    if (!executeRecaptcha) {
      setStatusMessage("reCAPTCHA not yet available");
      setStatusType("error");
      setTimeout(() => { setStatusMessage(""); setStatusType(""); }, 5000);
      return;
    }

    setLoading(true);

    try {
      const token = await executeRecaptcha("contact_form");
      const payload = { ...data, recaptchaToken: token };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatusMessage("Message sent successfully.");
        setStatusType("success");
        e.target.reset();
        setTimeout(() => { setStatusMessage(""); setStatusType(""); }, 3000);
      } else {
        setStatusMessage("Something went wrong.");
        setStatusType("error");
        setTimeout(() => { setStatusMessage(""); setStatusType(""); }, 3000);
      }
    } catch {
      setStatusMessage("Network error. Please try again.");
      setStatusType("error");
      setTimeout(() => { setStatusMessage(""); setStatusType(""); }, 3000);
    }

    setLoading(false);
    setTimeout(() => {
      toastRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <section 
      ref={(el) => {
        sectionRef.current = el; // For the observer
        if (refProp) refProp.current = el; // For your parent scroll
      }} 
      id="contact" 
      className="bg-[#FAFAFA] py-24 scroll-mt-[50px]"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Get In Touch</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded"></div>
          <p className="text-zinc-700 text-sm sm:text-base lg:text-lg mt-3 max-w-xl mx-auto">
            Tell me about your project — I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT COLUMN */}
          <div>
            <h3 className="text-2xl font-semibold text-zinc-900 mb-4">Let's Work Together</h3>
            <p className="text-zinc-700 mb-10 leading-relaxed">
              I'm available for freelance and full-time opportunities.
              If you have a project idea or want to build something impactful, feel free to reach out.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-purple-600 text-white rounded-full">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Email</p>
                  <p className="text-zinc-700">oguntokeemmanuel57@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-purple-600 text-white rounded-full">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Phone</p>
                  <p className="text-zinc-700">+234 902 226 6417</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center bg-purple-600 text-white rounded-full">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Location</p>
                  <p className="text-zinc-700">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100">
            {/* ✅ Only load the Provider when user is scrolling near the form */}
            {isIntersecting ? (
              <GoogleReCaptchaProvider reCaptchaKey="6LcaAoIsAAAAAOo29_EGqS9mIXb2c5y74Nz49dAj">
                <ContactForm 
                  handleSubmit={handleSubmit}
                  loading={loading}
                  emailError={emailError}
                  statusMessage={statusMessage}
                  statusType={statusType}
                  toastRef={toastRef}
                />
              </GoogleReCaptchaProvider>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-zinc-700 italic">
                Scroll to load contact form...
              </div>
            )}
          </div>
        </div>

        {statusMessage && (
          <div
            ref={toastRef}
            className={`mt-10 max-w-xl mx-auto text-center p-4 rounded-lg text-sm font-medium
            ${statusType === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {statusMessage}
          </div>
        )}
      </Container>
    </section>
  );
}