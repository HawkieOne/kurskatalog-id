import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-cream p-2 shadow-lg">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-onyx">
            Kurskatalog
        </Link>
    </div>
  );
}
