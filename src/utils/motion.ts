/**
 * Motion Variants for Framer Motion
 * @param delay the delay for the animation
 */
export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

/**
 * Fade in variant for Framer Motion
 * @param direction the direction of the animation
 * @param type the type of animation
 * @param delay the delay for the animation
 * @param duration the duration of the animation
 */
export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Zoom in variant for Framer Motion
 * @param delay the delay for the animation
 * @param duration the duration of the animation
 */
export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Slide in variant for Framer Motion
 * @param direction the direction of the animation
 * @param type the type of animation
 * @param delay the delay for the animation
 * @param duration the duration of the animation
 */
export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Stagger variant for Framer Motion
 * @param staggerChildren the stagger children
 * @param delayChildren the delay children
 * @returns
 */
export const staggerContainer = (
  staggerChildren: number,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
