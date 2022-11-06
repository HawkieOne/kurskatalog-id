import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 bg-white p-4">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
            Kurskatalog
        </Link>
    </div>
  );
}
