import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Menu, Plane, Mail, Lock, User, CheckCircle } from "../icons";
import DarkMode from "./DarkMode";
import { useWishlist } from "../context/WishlistContext";
import { Heart } from "../icons";

function Navbar() {
  const [signInOpen, setSignInOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [signInDone, setSignInDone] = useState(false);
  const [registerDone, setRegisterDone] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [signInForm, setSignInForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { wishlist } = useWishlist();
  const location = useLocation();

  const handleSignIn = () => {
    if (!signInForm.email || !signInForm.password) {
      setSignInError("Please fill in all fields!");
      return;
    }
    setSignInError("");
    setSignInDone(true);
  };

  const handleRegister = () => {
    if (!registerForm.name || !registerForm.email || !registerForm.password) {
      setRegisterError("Please fill in all fields!");
      return;
    }
    setRegisterError("");
    setRegisterDone(true);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "Tours", path: "/tours" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border px-6 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide flex items-center gap-2"
        >
          <div className="bg-teal-600 rounded-lg p-1.5">
            <Plane className="text-white w-4 h-4" />
          </div>
          WANDER<span className="text-teal-600">LY</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm px-4 py-2 rounded-lg transition ${
                  location.pathname === link.path
                    ? "bg-teal-50 text-teal-600 font-medium"
                    : "text-gray-500 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex gap-2 items-center">
          <DarkMode />

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-50 transition text-gray-500 hover:text-red-500"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            className="text-gray-600 hover:text-teal-600 text-sm"
            onClick={() => {
              setSignInOpen(true);
              setSignInDone(false);
              setSignInError("");
            }}
          >
            Sign in
          </Button>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-lg"
            onClick={() => {
              setGetStartedOpen(true);
              setRegisterDone(false);
              setRegisterError("");
            }}
          >
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
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-10">
              {/* Logo */}
              <Link
                to="/"
                className="text-xl font-bold tracking-wide flex items-center gap-2"
              >
                <div className="bg-teal-600 rounded-lg p-1.5">
                  <Plane className="text-white w-4 h-4" />
                </div>
                WANDER<span className="text-teal-600">LY</span>
              </Link>

              {/* Links */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm px-4 py-2.5 rounded-lg transition ${
                      location.pathname === link.path
                        ? "bg-teal-50 text-teal-600 font-medium"
                        : "text-gray-500 hover:text-teal-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/wishlist"
                  className="text-sm px-4 py-2.5 rounded-lg text-gray-500 hover:text-teal-600 hover:bg-gray-50 flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Wishlist
                  {wishlist.length > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ml-auto">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </div>

              {/* Dark mode */}
              <div className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2">
                <span className="text-sm text-gray-500">Dark mode</span>
                <DarkMode />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="text-teal-600 border-teal-600 w-full"
                  onClick={() => {
                    setSignInOpen(true);
                    setSignInDone(false);
                    setSignInError("");
                  }}
                >
                  Sign in
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                  onClick={() => {
                    setGetStartedOpen(true);
                    setRegisterDone(false);
                    setRegisterError("");
                  }}
                >
                  Get started
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sign in Dialog */}
      <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <div className="bg-teal-600 rounded-lg p-1.5">
                <Plane className="text-white w-4 h-4" />
              </div>
              Sign in to Wanderly
            </DialogTitle>
          </DialogHeader>

          {signInDone ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle className="text-teal-600 w-12 h-12" />
              <p className="text-teal-700 font-semibold text-lg">
                Welcome back! 🎉
              </p>
              <p className="text-sm text-gray-400 text-center">
                You have successfully signed in to Wanderly.
              </p>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                onClick={() => setSignInOpen(false)}
              >
                Continue exploring
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
                <Mail className="text-teal-600 w-4 h-4" />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                  value={signInForm.email}
                  onChange={(e) =>
                    setSignInForm({ ...signInForm, email: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
                <Lock className="text-teal-600 w-4 h-4" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                  value={signInForm.password}
                  onChange={(e) =>
                    setSignInForm({ ...signInForm, password: e.target.value })
                  }
                />
              </div>
              {signInError && (
                <p className="text-xs text-red-500 text-center">
                  {signInError}
                </p>
              )}
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-2"
                onClick={handleSignIn}
              >
                Sign in
              </Button>
              <p className="text-xs text-center text-gray-400">
                Don't have an account?{" "}
                <span
                  className="text-teal-600 cursor-pointer hover:underline"
                  onClick={() => {
                    setSignInOpen(false);
                    setGetStartedOpen(true);
                    setRegisterDone(false);
                    setRegisterError("");
                  }}
                >
                  Get started
                </span>
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Get started Dialog */}
      <Dialog open={getStartedOpen} onOpenChange={setGetStartedOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <div className="bg-teal-600 rounded-lg p-1.5">
                <Plane className="text-white w-4 h-4" />
              </div>
              Create your account
            </DialogTitle>
          </DialogHeader>

          {registerDone ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle className="text-teal-600 w-12 h-12" />
              <p className="text-teal-700 font-semibold text-lg">
                Welcome to Wanderly! 🌍
              </p>
              <p className="text-sm text-gray-400 text-center">
                Your account has been created. Start exploring amazing
                destinations!
              </p>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white w-full"
                onClick={() => setGetStartedOpen(false)}
              >
                Start exploring
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
                <User className="text-teal-600 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Full name"
                  className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                  value={registerForm.name}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, name: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
                <Mail className="text-teal-600 w-4 h-4" />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                  value={registerForm.email}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, email: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2">
                <Lock className="text-teal-600 w-4 h-4" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="border-none shadow-none focus-visible:ring-0 text-sm p-0"
                  value={registerForm.password}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              {registerError && (
                <p className="text-xs text-red-500 text-center">
                  {registerError}
                </p>
              )}
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-2"
                onClick={handleRegister}
              >
                Create account
              </Button>
              <p className="text-xs text-center text-gray-400">
                Already have an account?{" "}
                <span
                  className="text-teal-600 cursor-pointer hover:underline"
                  onClick={() => {
                    setGetStartedOpen(false);
                    setSignInOpen(true);
                    setSignInDone(false);
                    setSignInError("");
                  }}
                >
                  Sign in
                </span>
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </nav>
  );
}

export default Navbar;
