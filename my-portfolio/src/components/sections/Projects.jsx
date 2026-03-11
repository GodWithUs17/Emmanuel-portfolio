// import Container from "../ui/Container";
// import SectionTitle from "../ui/SectionTitle";
// import Card from "../ui/Card";
// import Button from "../ui/Button";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Manual Purchasing Platform",
//       bullets: [
//         "Streamlined manual buying process",
//         "Improved system structure",
//         "Better user flow clarity"
//       ],
//     },
//     {
//       title: "Landing Page Rebuild",
//       bullets: [
//         "Clear messaging hierarchy",
//         "Improved layout structure",
//         "Mobile-first redesign"
//       ],
//     },
//   ];

//   return (
//     <section className="py-20 bg-zinc-50" id="projects">
//       <Container>
//         <SectionTitle>
//           Selected Work
//         </SectionTitle>

//         <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               title={project.title}
//               bullets={project.bullets}
//             />
//           ))}
//         </div>

//         <div className="text-center mt-10">
//           <Button variant="secondary">
//             View More Projects →
//           </Button>
//         </div>
//       </Container>
//     </section>
//   );
// }

import Container from "./../ui/Container";
import projectImage1 from '../assets/SKILL.avif';
import projectImage2 from '../assets/Mennac.avif';
import projectImage3 from '../assets/ManualApp.avif';



const projects = [
  {
    id: 1,
    title: "E-commerce App Redesign",
    description: "Streamlined the checkout process, increasing conversion by 15%.",
    tags: ["UX/UI", "React", "User Testing", "Figma"],
    image: projectImage1,
    link: "https://godwithus17.github.io/SkillBridge/",
  },
  {
    id: 2,
    title: "High-Conversion Business Landing Page",
    description: "Redesigned a confusing landing page into a clear, conversion-focused experience with improved structure and usability.",
    tags: ["3D", "Rendering", "Figma"],
    image: projectImage2,
    link: "https://godwithus17.github.io/MeenaconcHeartShow/",
  },
  {
    id: 3,
    title: "Digital Manual Purchase Platform",
    description: "Digital Manual Purchase Platform with improved UX flow and system structure.",
    tags: ["UX/UI", "User Form", "Figma"],
    image: projectImage3,
    link: "#",
  },
  // {
  //   id: 4,
  //   title: "Crear Testing Redesign",
  //   description: "Comparative testing redesign with improved UX flow.",
  //   tags: ["UX/UI", "Testing", "Figma"],
  //   image: "/images/crear.png",
  //   link: "#",
  // },
  // {
  //   id: 5,
  //   title: "User Testing Project",
  //   description: "Comprehensive user testing and feedback implementation.",
  //   tags: ["User Testing", "Figma"],
  //   image: "/images/usertesting.png",
  //   link: "#",
  // },
];

export default function PortfolioSection({refProp}) {
  return (
    <section ref={refProp} className="py-24 bg-gray-50 scroll-mt-20"id="portfolio">
      <Container>
        <h2 className="text-3xl font-bold mb-2 text-center">My Portfolio</h2>
        <p className="text-center text-gray-600 mb-12">
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
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
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