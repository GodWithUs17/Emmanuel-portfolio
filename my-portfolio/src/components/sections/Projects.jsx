import Container from "../ui/Container";
import projectImage1 from "../assets/SKILL.webp";
import projectImage2 from "../assets/Mennac.webp";
import projectImage3 from "../assets/ManualApp.webp";
import projectImage4 from "../assets/Mufti.avif";
import { ArrowUpRight, ExternalLink } from "lucide-react";
const projects = [
  {
    id: "manual",
    number: "01",
    title: "LAUTECH Manual Distribution System",
    type: "Full-stack application",
    description:
      "A QR-enabled purchasing and distribution workflow designed to make manual sales, receipt verification and collection tracking easier to manage.",
    tags: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    image: projectImage3,
    link: "https://manual-distribution-frontend.vercel.app",
    featured: true,
  },
  {
    id: "mufti",
    number: "02",
    title: "Mufti Laundry",
    type: "Booking & service platform",
    description:
      "A responsive laundry booking experience that helps customers schedule pickups and follow their orders, with supporting business workflows.",
    tags: ["React", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: projectImage4,
    link: "https://mufti-laundry-website.vercel.app",
  },
  {
    id: "skillbridge",
    number: "03",
    title: "SkillBridge",
    type: "Platform landing page",
    description:
      "A landing page concept connecting learners with practical opportunities through clear messaging, structured content and focused calls to action.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    image: projectImage1,
    link: "https://godwithus17.github.io/SkillBridge/",
  },
  {
    id: "meenacon",
    number: "04",
    title: "Meenaconc Heart Show",
    type: "Campaign landing page",
    description:
      "A warm, conversion-focused landing page built to introduce an event, communicate its message and guide visitors toward taking action.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    image: projectImage2,
    link: "https://godwithus17.github.io/MeenaconcHeartShow/",
  },
];
export default function PortfolioSection({ refProp }) {
  return (
    <section ref={refProp} id="portfolio" className="section section-soft">
      <Container>
        <div className="section-intro section-intro-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-heading">
              A few things <span>I've built.</span>
            </h2>
          </div>
          <p className="section-description">
            A selection of practical projects, experiments and digital
            experiences. Each one starts with a problem worth solving.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.featured ? "project-featured" : ""}`}
              key={project.id}
            >
              <a
                className="project-image"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                />
                <span className="image-link">
                  <ExternalLink size={17} />
                </span>
              </a>
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live project <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-note">
          Want to see more?{" "}
          <a
            href="https://github.com/GodWithUs17"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub <ArrowUpRight size={14} />
          </a>
        </p>
      </Container>
    </section>
  );
}
