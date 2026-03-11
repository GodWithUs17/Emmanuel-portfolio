export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition duration-200 w-full sm:w-auto";

  const variants = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700",
    secondary:
      "border border-purple-600 text-purple-600 hover:bg-purple-50",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}