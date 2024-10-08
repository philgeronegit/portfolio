import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";
import { cn } from "../lib/utils";
import { styles } from "../styles";
import DarkModeToggle from "./DarkModeToggle";

const MAX_SCROLL_HEIGHT = 100;

interface NavBarProps {
  isDarkMode: boolean;
  setDarkMode: (checked: boolean) => void;
}
const Navbar = ({ isDarkMode, setDarkMode }: NavBarProps) => {
  const [, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > MAX_SCROLL_HEIGHT) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-3 fixed top-0 z-20",
        {
          "bg-davys-gray dark:bg-tertiary ": scrolled,
          "bg-transparent": !scrolled,
        },
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-5 h-5 object-contain" />
          <p className="sm:block text-cadet-graydark:text-white text-[18px] font-bold cursor-pointer flex ">
            philippe.gerhardt
          </p>
        </Link>

        <div className="pr-6">
          <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
