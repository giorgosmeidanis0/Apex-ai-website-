import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[hsl(var(--bg))]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gradient-cyan">404</h1>
        <p className="mb-8 text-2xl text-[hsl(var(--text-muted))]">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
