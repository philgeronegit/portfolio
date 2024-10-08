import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { list, projectType, pythonProject, webProject } from "../constants";
import { cn } from "../lib/utils";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";

interface ButtonProps {
  active: boolean;
  id: string;
  setSelected: (id: string) => void;
  title: string;
}

function Button({ title, active, setSelected, id }: ButtonProps) {
  const baseClasses =
    "cursor-pointer overflow-hidden text-sm my-6 p-2 font-bold rounded-lg hover:opacity-90 hover:text-white";
  return (
    <li
      className={cn(baseClasses, { "text-white bg-[#398485]": active })}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

interface ProjectState {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_link?: string;
  source_code_link?: string;
}

const Project = () => {
  const [selected, setSelected] = useState<projectType>("web");
  const handleSetSelected = (id: string) => setSelected(id as projectType);

  const [data, setData] = useState<ProjectState[]>([]);

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webProject);
        break;
      case "python":
        setData(pythonProject);
        break;

      default:
        setData(webProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(50px)" }}
        whileInView={{ opacity: 1, transform: "none" }}
        variants={textVariant()}
        className={`bg-gray-900 dark:bg-tertiary mt-4 rounded-2xl ${styles.padding}`}
      >
        <h2 className={styles.sectionHeadText}>Projets</h2>
      </motion.div>

      <div className="project w-full">
        <motion.p
          whileInView={{ opacity: 1, transform: "none" }}
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          <ul className="flex flex-row gap-5">
            {list.map((item) => (
              <Button
                active={selected === item.id}
                id={item.id}
                setSelected={handleSetSelected}
                title={item.title}
              />
            ))}
          </ul>

          <div className="box mt-20 flex flex-wrap justify-center">
            {data.map((project, index) => (
              <div>
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              </div>
            ))}
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Project, "projet");
