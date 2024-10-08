import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";

interface FormationCardProps {
  index: number;
  branch: string;
  name: string;
  degree: string;
  year: string;
  image: string;
}

const FormationCard = ({
  index,
  branch,
  name,
  degree,
  year,
  image,
}: FormationCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.7, 0.75)}
    className="bg-gray-700 dark:bg-rich-black p-1 rounded-3xl xs:w-[320px] w-96"
  >
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.1}
      transitionSpeed={450}
      className="p-6"
    >
      <div className="mt-7 flex flex-col justify-between items-center gap-1">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          width="80"
          height="80"
          className="rounded-full object-cover"
        />
        <div className="mt-3 flex-1 flex flex-col">
          <p className="text-center text-white font-medium text-[16px]">
            <span className="text-center blue-text-gradient">{name}</span>
          </p>
          <p className="text-center mt-1 text-secondary text-[12px]">{year}</p>
        </div>
      </div>

      <p className="text-white font-black text-[48px]"></p>

      <div className="mt-1">
        <p className="text-center text-white tracking-wider text-[18px]">
          {degree}
        </p>
        <p className="mt-3 text-center pink-text-gradient">{branch}</p>
      </div>
    </Tilt>
  </motion.div>
);

export default FormationCard;
