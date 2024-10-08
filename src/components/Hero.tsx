import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { styles } from "../styles";
import { GalaxyCanvas } from "./canvas";

const icons = [
  {
    name: "GitHub",
    icon: <AiOutlineGithub />,
    link: "https://github.com/philgeronegit",
  },
  {
    name: "LinkedIn",
    icon: <ImLinkedin />,
    link: "https://www.linkedin.com/in/philippe-gerhardt-052482174",
  },
];

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="flex">
        <div
          className={`relative top-9 max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="leading-none md:leading-tight lg:leading-normal">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Bonjour, je suis
              <p className="font-black text-medium-slate-blue">
                Philippe Gerhardt
              </p>
            </h1>

            <div className="z-50 flex w-max gap-3.5 rounded-3xl bg-black-100/30">
              {icons.map((icon, index) => (
                <a
                  key={index}
                  className="p-4 text-4xl"
                  href={icon.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative -top-1/4 left-40 h-4/5">
        <GalaxyCanvas />
      </div>
    </section>
  );
};

export default Hero;
