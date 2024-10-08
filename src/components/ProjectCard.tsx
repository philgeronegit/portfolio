import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { demo, github } from "../assets";
import { fadeIn } from "../utils/motion";
import "./Project.css";

interface ProjectCardProps {
  description: string;
  image: string;
  index: number;
  name: string;
  source_code_link?: string;
  source_link?: string;
  tags: { name: string; color: string }[];
}

const ProjectCard = ({
  description,
  image,
  index,
  name,
  source_code_link,
  source_link,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{ opacity: 1, transform: "none" }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      viewport={{ once: false, amount: 0.8 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.1}
        transitionSpeed={450}
        className="h-[400px] bg-gray-700 dark:bg-cyan p-5 rounded-2xl sm:w-[330px] w-full"
      >
        <div className="Box1 relative w-full h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="image w-full h-full object-cover rounded-2xl"
          />

          <div
            className="absolute inset-0 flex justify-center card-img_hover"
            style={{ alignItems: "center" }}
          >
            <h3 className="text-black font-bold text-[16px]">{name}</h3>
          </div>

          <div className="title absolute inset-0 flex justify-end card-img_hover">
            {source_link && (
              <div
                onClick={() => window.open(source_link, "_blank")}
                className="bg-gradient-to-r from-[#434343] to-[#000000] w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={demo}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-r from-[#434343] to-[#000000] w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="content mt-5">
          <p
            className="mt-2 text-secondary text-[14px]"
            style={{ textAlign: "justify" }}
          >
            {description}
          </p>
        </div>

        <div className="content mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
