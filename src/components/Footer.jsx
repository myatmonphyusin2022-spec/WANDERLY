function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold tracking-wide">
              WANDER<span className="text-teal-600">LY</span>
            </span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your trusted travel partner for unforgettable experiences around
              the world.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              About us
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Careers
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Blog
            </a>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold">Support</h4>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Help center
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Contact us
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Privacy policy
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold">Follow us</h4>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Instagram
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Facebook
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-teal-600">
              Twitter
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2025 Wanderly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
