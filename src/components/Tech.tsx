import { motion } from "framer-motion";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import SectionWrapper from "./SectionWrapper";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`bg-gray-900 dark:bg-tertiary rounded-2xl ${styles.padding}`}
      >
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>
      <div className="mt-8 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div style={{ height: "5rem", width: "5rem" }} key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
