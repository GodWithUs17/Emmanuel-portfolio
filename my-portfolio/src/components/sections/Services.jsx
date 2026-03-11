import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Services({ refProp }) {
  const services = [
    {
      title: "Business Websites",
      bullets: [
        "Conversion-focused structure",
        "Clear messaging hierarchy",
        "Mobile-first performance"
      ],
    },
    {
      title: "Custom Web Applications",
      bullets: [
        "Secure backend systems",
        "Scalable architecture",
        "Clean user experience"
      ],
    },
    {
      title: "Optimization & Improvements",
      bullets: [
        "Speed & performance upgrades",
        "UI restructuring",
        "Feature expansion"
      ],
    },
  ];

  return (
    <section ref={refProp} className="py-24 bg-zinc-50 scroll-mt-20" id="services">
      <Container>
        <SectionTitle>
          What I Build
        </SectionTitle>

        <div className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              bullets={service.bullets}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}