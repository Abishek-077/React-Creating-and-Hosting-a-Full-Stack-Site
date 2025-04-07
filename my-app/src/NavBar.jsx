import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
