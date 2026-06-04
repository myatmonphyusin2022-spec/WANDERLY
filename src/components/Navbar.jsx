import { useState } from "react";
import { MenuIcon, CloseIcon } from "../icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide">
          WANDER<span className="text-teal-600">LY</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Destinations
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Tours
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Sign in button */}
        <button className="hidden md:block bg-teal-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-teal-700">
          Sign in
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4">
          <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
            Home
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
            Destinations
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
            Tours
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-teal-600">
            Contact
          </a>

          <button className="bg-teal-600 text-white px-5 py-2 rounded-lg text-sm w-full">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
