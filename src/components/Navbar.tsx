import { Link, useLocation } from "react-router-dom";
import Title from "./Title";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");
  const capitalizedPathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);
  return (
    <div className="navbar bg-cream p-2 shadow-lg relative flex justify-center items-center">
      <Link
        to="/"
        className="normal-case text-xl text-onyx absolute inset-y-0 left-10 h-full flex flex-col justify-center
                  border-b-pink hover:border-b"
      >
        Kurskatalog
      </Link>
      {location.pathname !== "/" && <Title>{capitalizedPathname}</Title>}
    </div>
  );
}
