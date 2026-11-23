import Container from "../ui/Container";
import { Search, ClipboardList, Code2, Rocket } from "lucide-react";
const steps = [
  {
    icon: Search,
    n: "01",
    title: "Discover",
    text: "We discuss the goal, audience and constraints so the work solves the right problem.",
  },
  {
    icon: ClipboardList,
    n: "02",
    title: "Plan",
    text: "I map the key pages, user flows and technical approach before implementation.",
  },
  {
    icon: Code2,
    n: "03",
    title: "Build",
    text: "I develop the experience, connect the functionality and keep you informed as it takes shape.",
  },
  {
    icon: Rocket,
    n: "04",
    title: "Launch & improve",
    text: "We test the result, prepare it for launch and identify sensible next improvements.",
  },
];
export default function Process({ refProp }) {
  return (
    <section ref={refProp} id="process" className="section">
      <Container>
        <div className="section-intro">
          <p className="eyebrow">A clear process</p>
          <h2 className="section-heading">
            Good work comes from <span>a good process.</span>
          </h2>
          <p className="section-description">
            A collaborative approach that keeps the goal clear from the first
            conversation to launch.
          </p>
        </div>
        <div className="process-grid">
          {steps.map(({ icon: Icon, n, title, text }) => (
            <article className="process-step" key={n}>
              <div className="process-step-top">
                <span className="process-icon">
                  <Icon size={20} />
                </span>
                <span>{n}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
