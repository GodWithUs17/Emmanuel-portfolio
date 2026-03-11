export default function NavLink({ children, onClick, innerRef }) {
  return (
    <button
      ref={innerRef}
      onClick={onClick}
      className="px-2 py-1 text-zinc-900 font-medium"
    >
      {children}
    </button>
  );
}