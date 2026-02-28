export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border bg-gray-900 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
