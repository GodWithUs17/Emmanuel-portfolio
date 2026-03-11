
import Container from "../ui/Container";
import Button from "../ui/Button";
import profile from "../assets/profile.png";

export default function Hero({ refProp, scrollTo, contactRef, portfolioRef, moveIndicator, setActive }) {
  return (
    <section ref={refProp} className="flex items-center pt-20 pb-12 md:pt-24 md:pb-16 scroll-mt-20" id="home">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-xl space-y-6">

            <p className="text-sm font-medium text-purple-600">
              Web Developer • Problem Solver
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-snug text-zinc-900">
              Websites Built to Convert Visitors Into Customers
            </h1>

            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              I design and develop fast, scalable websites that help businesses
              attract customers and grow online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">

              <Button
                onClick={() => {
                  scrollTo(contactRef);
                  setActive?.("contact");
                  moveIndicator?.(contactRef);
                }}
              >
                Start a Project →
              </Button>

              <Button
                variant="secondary"
                onClick={() => {
                  scrollTo(portfolioRef);
                  setActive?.("portfolio");
                  moveIndicator?.(portfolioRef);
                }}
              >
                View My Work
              </Button>
            </div>

            <p className="text-sm sm:text-base md:text-base lg:text-base text-zinc-500 pt-2 max-w-xl mx-auto">
              Built with performance, usability, and scalability in mind.
            </p>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="p-2 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500">
              <img
                src={profile}
                alt="Emmanuel Oguntoke"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}