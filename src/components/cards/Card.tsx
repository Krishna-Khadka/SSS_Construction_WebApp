import { FaLightbulb } from "react-icons/fa";
import { PiStepsFill } from "react-icons/pi";
import { FaThumbsUp, FaUserCog } from "react-icons/fa";
import CardLayout from "./CardLayout";

const infos = [
  {
    icon: FaLightbulb,
    title: "great ideas",
    description:
      "Energistically monetize customized initiatives rather than progressive channels. Energistically",
  },
  {
    icon: PiStepsFill,
    title: "effective steps",
    description:
      "Strategically foster seamless experiences rather than integrated paradigms. Seamlessly leverage.",
  },
  {
    icon: FaThumbsUp,
    title: "positive feedback",
    description:
      "Synergistically evolve user-centric experiences and impactful partnerships. Efficiently unleash.",
  },
  {
    icon: FaUserCog,
    title: "user management",
    description:
      "Conveniently incentivize multifunctional models whereas optimal infomediaries. Holisticly foster.",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {infos.map((info, index) => (
        <CardLayout
          key={index}
          icon={info.icon}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  );
};

export default Card;
