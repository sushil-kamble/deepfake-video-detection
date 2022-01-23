import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between flex-wrap bg-gray-800 p-3 text-white">
        <h1>DeepFake Detection</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/detection">Detection</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
