import { useEffect, useState } from "react";

/**
 * Hook to get the current mobile status
 * @returns {boolean} isMobile - true if the screen is mobile
 */
function useIsMobile(defaultValue = false) {
  const [isMobile, setIsMobile] = useState(defaultValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
