import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "../icons";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-teal-600 hover:bg-teal-700 text-white rounded-full w-12 h-12 p-0 shadow-lg"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}

export default ScrollToTop;
