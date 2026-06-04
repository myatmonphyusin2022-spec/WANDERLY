import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Plane } from "../icons";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide flex items-center gap-2">
          <Plane className="text-teal-600 w-5 h-5" />
          WANDER<span className="text-teal-600">LY</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a
              href="#home"
              className="text-sm text-gray-500 hover:text-teal-600 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#destinations"
              className="text-sm text-gray-500 hover:text-teal-600 transition"
            >
              Destinations
            </a>
          </li>
          <li>
            <a
              href="#tours"
              className="text-sm text-gray-500 hover:text-teal-600 transition"
            >
              Tours
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm text-gray-500 hover:text-teal-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop buttons */}
        <div className="hidden md:flex gap-3">
          <Button
            variant="outline"
            className="text-teal-600 border-teal-600 hover:bg-teal-50"
          >
            Sign in
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">
            Get started
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-6 mt-10">
              <span className="text-xl font-bold tracking-wide flex items-center gap-2">
                <Plane className="text-teal-600 w-5 h-5" />
                WANDER<span className="text-teal-600">LY</span>
              </span>
              <a
                href="#home"
                className="text-sm text-gray-500 hover:text-teal-600"
              >
                Home
              </a>
              <a
                href="#destinations"
                className="text-sm text-gray-500 hover:text-teal-600"
              >
                Destinations
              </a>
              <a
                href="#tours"
                className="text-sm text-gray-500 hover:text-teal-600"
              >
                Tours
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-500 hover:text-teal-600"
              >
                Contact
              </a>
              <Button
                variant="outline"
                className="text-teal-600 border-teal-600 w-full"
              >
                Sign in
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">
                Get started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
