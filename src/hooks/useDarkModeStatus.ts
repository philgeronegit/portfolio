import { useEffect, useState } from "react";

/**
 * Hook to get the current dark mode status
 * @returns {boolean} isDarkMode
 */
function useDarkModeStatus() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaQueryChange = () => {
      setIsDarkMode(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isDarkMode;
}

export default useDarkModeStatus;
