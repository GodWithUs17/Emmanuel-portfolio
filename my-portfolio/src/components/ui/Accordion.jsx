import { useState } from "react";

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left font-semibold text-base"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <p className="mt-2 text-zinc-600 leading-relaxed">
          {content}
        </p>
      )}
    </div>
  );
}