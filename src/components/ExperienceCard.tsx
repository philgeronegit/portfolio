import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceCardProps {
  isDarkMode: boolean;
  experience: {
    company_name: string;
    date: string;
    icon: string;
    iconBg: string;
    link?: string;
    points: string[];
    title: string;
  };
}

const ExperienceCard = ({ isDarkMode, experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkMode ? "#151030" : "#111827",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
        {experience.link ? (
          <a
            href={experience.link}
            rel="noreferrer"
            className="align-center flex justify-center bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] bg-clip-text"
            target="_blank"
          >
            {experience.link}
          </a>
        ) : (
          <br />
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
