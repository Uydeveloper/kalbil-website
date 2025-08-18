export function Card({ children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      {children}
    </div>
  );
}