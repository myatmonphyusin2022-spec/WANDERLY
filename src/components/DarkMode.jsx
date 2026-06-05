import useDarkMode from "../hooks/useDarkMode";
import { Button } from "./ui/button";
import { Sun, Moon } from "../icons";

function DarkMode() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDark}
      className="rounded-full"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-500" />
      )}
    </Button>
  );
}

export default DarkMode;
