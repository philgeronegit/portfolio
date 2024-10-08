import { Tooltip } from "flowbite-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  setDarkMode: (checked: boolean) => void;
}
const DarkModeToggle = ({ isDarkMode, setDarkMode }: DarkModeToggleProps) => {
  // add dark to body if not present
  if (isDarkMode) {
    document.body.classList.add("dark");
  }
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    document.body.classList.toggle("dark");
  };

  return (
    <Tooltip
      content={`Basculer vers le thème ${isDarkMode ? "light" : "dark"}`}
      placement="bottom"
    >
      <DarkModeSwitch
        moonColor="white"
        sunColor="#e5d650ff"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={20}
      />
    </Tooltip>
  );
};

export default DarkModeToggle;
