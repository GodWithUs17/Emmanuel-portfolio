export default function Card({ title, bullets = [] }) {
  return (
    <div className="rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition space-y-4">
      <h3 className="text-xl font-semibold text-zinc-900">
        {title}
      </h3>

      <ul className="space-y-2 text-base text-zinc-600">
        {bullets.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-purple-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}