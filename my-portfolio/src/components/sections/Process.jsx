import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Accordion from "../ui/Accordion";

export default function Process({ refProp }) {
  const steps = [
    {
      title: "1. Discover",
      content: "We clarify your goals, audience, and business objectives before building anything.",
    },
    {
      title: "2. Plan",
      content: "We define structure, layout, and technical requirements for clarity and scalability.",
    },
    {
      title: "3. Develop",
      content: "I build a clean, fast, and structured solution focused on performance.",
    },
    {
      title: "4. Launch & Refine",
      content: "We test, optimize, and prepare your platform for real-world growth.",
    },
  ];

  return (
    <section ref={refProp} className="py-24 scroll-mt-20" id="process">
      <Container>
        <SectionTitle>
          How We Work
        </SectionTitle>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <Accordion
              key={index}
              title={step.title}
              content={step.content}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}