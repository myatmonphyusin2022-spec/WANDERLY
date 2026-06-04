import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function Footer() {
  return (
    <footer className="bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              About us
            </Button>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Careers
            </Button>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Blog
            </Button>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold">Support</h4>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Help center
            </Button>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Contact us
            </Button>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Privacy policy
            </Button>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold">Follow us</h4>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Instagram
            </Button>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Facebook
            </Button>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto justify-start"
            >
              Twitter
            </Button>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2025 Wanderly. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto"
            >
              Privacy
            </Button>
            <Button
              variant="link"
              className="text-xs text-gray-400 hover:text-teal-600 p-0 h-auto"
            >
              Terms
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
