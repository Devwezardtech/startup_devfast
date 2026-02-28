export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-white text-black rounded-xl px-4 py-2 hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
