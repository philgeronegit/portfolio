import { Tooltip } from "flowbite-react";
import { useState } from "react";
import { AiOutlineFundProjectionScreen, AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { cn } from "../lib/utils";

interface LinkProps {
  activeNav: string;
  children: React.ReactNode;
  href: string;
  onClick: () => void;
}
const Link = ({ href, children, onClick, activeNav }: LinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn("flex p-4 text-lg bg-transparent hover:text-cyan-400", {
        "text-gray-400": activeNav === href,
      })}
    >
      {children}
    </a>
  );
};

const links = [
  { text: "Home", href: "#", icon: <AiOutlineHome /> },
  { text: "Formation", href: "#formation", icon: <BiBook /> },
  { text: "Projet", href: "#projet", icon: <AiOutlineFundProjectionScreen /> },
  { text: "Expérience", href: "#experience", icon: <BsPersonWorkspace /> },
  { text: "Contact", href: "#contact", icon: <MdMessage /> },
];

const Content = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="fixed left-2/4 bottom-2 flex bg-davys-gray/60 dark:bg-davys-gray/50 backdrop-blur-lg gap-3 w-max rounded-3xl py-0 px-2 z-50 -translate-x-1/2">
      {links.map((link, index) => (
        <Tooltip key={index} content={link.text} placement="top">
          <Link
            href={link.href}
            onClick={() => setActiveNav(link.href)}
            activeNav={activeNav}
          >
            {link.icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default Content;
