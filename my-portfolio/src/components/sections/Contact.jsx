import { useState } from "react";
import Container from "../ui/Container";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import {
  useGoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const submit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!executeRecaptcha) {
      setStatus({
        type: "error",
        text: "The secure form is still loading. Please try again shortly or email me directly.",
      });
      return;
    }
    const form = e.currentTarget;
    const values = new FormData(form);
    setLoading(true);
    try {
      const token = await executeRecaptcha("contact_form");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.get("name"),
          email: values.get("email"),
          message: values.get("message"),
          recaptchaToken: token,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(
          result.error || "Your message could not be sent. Please try again.",
        );
      form.reset();
      setStatus({
        type: "success",
        text: "Thanks for reaching out. Your message has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        text:
          error.message ||
          "A network error occurred. Please email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Ada Okafor"
            minLength="2"
            maxLength="100"
            required
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            maxLength="254"
            required
          />
        </label>
      </div>
      <label>
        Tell me about your project
        <textarea
          name="message"
          rows="5"
          minLength="10"
          maxLength="5000"
          placeholder="What are you looking to build? Include any goals, features or timeline you have in mind."
          required
        />
      </label>
      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending message…" : "Send message"}
        <Send size={16} />
      </button>
      {status && (
        <p role="status" className={`form-status ${status.type}`}>
          {status.text}
        </p>
      )}
      <p className="form-privacy">
        Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}
export default function Contact({ refProp }) {
  return (
    <section ref={refProp} id="contact" className="section contact-section">
      <Container>
        <div className="contact-heading">
          <p className="eyebrow">Have a project in mind?</p>
          <h2 className="section-heading">
            Let's make something <span>useful.</span>
          </h2>
          <p className="section-description">
            Tell me what you're working on. I'll get back to you to discuss the
            next steps.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-aside">
            <h3>Start a conversation.</h3>
            <p>
              Whether you need a business website, a custom application or help
              improving an existing product, I'd like to hear about it.
            </p>
            <a
              className="contact-detail"
              href="mailto:oguntokeemmanuel57@gmail.com"
            >
              <span>
                <Mail size={18} />
              </span>
              <span>
                <small>Email</small>oguntokeemmanuel57@gmail.com
              </span>
              <ArrowUpRight size={16} />
            </a>
            <a className="contact-detail" href="tel:+2349022266417">
              <span>
                <Phone size={18} />
              </span>
              <span>
                <small>Phone</small>+234 902 226 6417
              </span>
              <ArrowUpRight size={16} />
            </a>
            <div className="contact-detail">
              <span>
                <MapPin size={18} />
              </span>
              <span>
                <small>Based in</small>Ibadan, Nigeria
              </span>
            </div>
            <div className="contact-aside-note">
              <span className="availability-dot" /> Open to freelance projects
              and collaborations
            </div>
          </div>
          <div className="contact-form-card">
            <GoogleReCaptchaProvider reCaptchaKey="6LcaAoIsAAAAAOo29_EGqS9mIXb2c5y74Nz49dAj">
              <ContactForm />
            </GoogleReCaptchaProvider>
          </div>
        </div>
      </Container>
    </section>
  );
}
