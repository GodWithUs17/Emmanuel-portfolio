import Container from "../ui/Container";
import { PanelsTopLeft, Workflow, Gauge, ArrowUpRight } from "lucide-react";
const services = [
  {
    icon: PanelsTopLeft,
    number: "01",
    title: "Business websites",
    text: "Clear, responsive websites that communicate your value, build trust and turn visitors into enquiries.",
    items: [
      "Business and service websites",
      "Landing pages",
      "Mobile-first interfaces",
    ],
  },
  {
    icon: Workflow,
    number: "02",
    title: "Custom web applications",
    text: "Purpose-built applications that make business processes easier to manage and use.",
    items: [
      "Dashboards and portals",
      "Booking and management systems",
      "API and database integration",
    ],
  },
  {
    icon: Gauge,
    number: "03",
    title: "Optimization & improvements",
    text: "Practical improvements that make existing websites faster, clearer and more dependable.",
    items: [
      "Performance improvements",
      "UI and UX refinement",
      "Feature development",
    ],
  },
];
export default function Services({ refProp }) {
  return (
    <section ref={refProp} id="services" className="section">
      <Container>
        <div className="section-intro">
          <p className="eyebrow">What I can help with</p>
          <h2 className="section-heading">
            From first idea to <span>working product.</span>
          </h2>
          <p className="section-description">
            I combine thoughtful interfaces with reliable functionality to
            deliver solutions people can actually use.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, text, items }) => (
            <article className="service-card" key={number}>
              <div className="service-top">
                <span className="service-icon">
                  <Icon size={22} />
                </span>
                <span className="service-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="service-arrow">
                <ArrowUpRight size={18} />
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
