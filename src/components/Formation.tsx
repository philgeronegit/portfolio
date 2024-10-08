import { motion } from "framer-motion";
import { educations } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import FormationCard from "./FormationCard";
import SectionWrapper from "./SectionWrapper";

const Formation = () => {
  return (
    <div className="bg-gray-800 dark:bg-cyan rounded-[20px]">
      <div
        className={`bg-gray-900 dark:bg-violet rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Formation</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {educations.map((education, index) => (
          <FormationCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Formation, "formation");
