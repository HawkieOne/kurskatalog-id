import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-white p-2">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
            Kurskatalog
        </Link>
    </div>
  );
}
