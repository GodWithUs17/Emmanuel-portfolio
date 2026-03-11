export default function SectionTitle({ children, align = "center" }) {
  const alignment =
    align === "left" ? "text-left" : "text-center";

  return (
    <h2
      className={`text-2xl md:text-3xl font-semibold text-zinc-900 mb-8 ${alignment}`}
    >
      {children}
    </h2>
  );
}