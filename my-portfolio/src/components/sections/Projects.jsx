import Container from "./../ui/Container";
import projectImage1 from '../assets/SKILL.webp';
import projectImage2 from '../assets/Mennac.webp';
import projectImage3 from '../assets/ManualApp.webp';



const projects = [
  {
    id: 1,
    title: "SkillBridge – Skills Matching Platform",
    description: "Designed a platform landing page that connects users to real opportunities and encourages engagement. Structured to clearly communicate value and guide users toward taking action.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: projectImage1,
    link: "https://godwithus17.github.io/SkillBridge/",
  },
  {
    id: 2,
    title: "Meenaconc – Conversion-Focused Landing Page",
    description: "Built a clean landing page that improves user flow and guides visitors toward taking action. Designed to increase engagement through clear structure and intuitive layout.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "API Integration"],
    image: projectImage2,
    link: "https://godwithus17.github.io/MeenaconcHeartShow/",
  },
  {
    id: 3,
    title: "Manual App – QR-Based Distribution System",
    description: "Developed a QR-based system that enables fast and secure verification of manual purchases. Reduces errors and prevents duplicate claims during distribution.",
    tags: ["React", "Tailwind CSS", "Prisma", "PostgreSQL", "API Integration"],
    image: projectImage3,
    link: "#",
  },

];

export default function PortfolioSection({refProp}) {
  return (
    <section ref={refProp} className="py-[45px] bg-gray-50 scroll-mt-20"id="portfolio">
      <Container>
        <h2 className="text-3xl font-bold mb-2 text-center">My Portfolio</h2>
        <p className="text-center text-gray-700 mb-12">
          A selection of projects I've worked on. Click to explore more.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                width="600"
                height="400"
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  aria-label={`View details for ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}