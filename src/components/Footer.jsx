import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Plane, Mail, Phone, MapPin, Heart } from "../icons";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link
              to="/"
              className="text-xl font-bold tracking-wide flex items-center gap-2"
            >
              <div className="bg-teal-600 rounded-lg p-1.5">
                <Plane className="text-white w-4 h-4" />
              </div>
              WANDER<span className="text-teal-400">LY</span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your trusted travel partner for unforgettable experiences around
              the world. Explore, discover, and create memories that last a
              lifetime.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-2">
              <button className="bg-white/10 hover:bg-teal-600 transition p-2 rounded-lg text-xs font-bold">
                IG
              </button>
              <button className="bg-white/10 hover:bg-teal-600 transition p-2 rounded-lg text-xs font-bold">
                FB
              </button>
              <button className="bg-white/10 hover:bg-teal-600 transition p-2 rounded-lg text-xs font-bold">
                TW
              </button>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Home
              </Link>
              <Link
                to="/destinations"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Destinations
              </Link>
              <Link
                to="/tours"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Tours
              </Link>
              <Link
                to="/contact"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Contact
              </Link>
              <Link
                to="/wishlist"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Wishlist
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold">Support</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Help center
              </a>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Terms of service
              </a>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                Cancellation policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-teal-400 transition"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold">Contact us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="text-teal-400 w-4 h-4 shrink-0" />
                <p className="text-xs text-gray-400">hello@wanderly.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-teal-400 w-4 h-4 shrink-0" />
                <p className="text-xs text-gray-400">+1 (555) 000-1234</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-teal-400 w-4 h-4 shrink-0" />
                <p className="text-xs text-gray-400">123 Travel Street, NY</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-2">
              <p className="text-xs text-gray-400 mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 outline-none focus:border-teal-600 transition"
                />
                <Button
                  size="sm"
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs px-3"
                >
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2025 Wanderly. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" />{" "}
            for travelers worldwide
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-teal-400 transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-teal-400 transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-teal-400 transition"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
