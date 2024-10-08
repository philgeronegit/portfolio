import { motion } from "framer-motion";
import { useContext } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { DarkModeContext } from "./DarkModeContext";
import ExperienceCard from "./ExperienceCard";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  const isDarkMode = useContext(DarkModeContext);
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`bg-gray-900 dark:bg-tertiary mt-10 rounded-2xl ${styles.padding}`}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Expérience professionnelle
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              isDarkMode={isDarkMode}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
