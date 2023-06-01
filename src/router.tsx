import { ClockCounterClockwise, House, Lightbulb, Phone } from "phosphor-react";

interface IRoute {
  name: string;
  pathname: string;
  icon: JSX.Element;
}

export const routers: IRoute[] = [
  {
    name: "Home",
    pathname: "home",
    icon: <House size={28} />,
  },
  {
    name: "Serviços",
    pathname: "services",
    icon: <Lightbulb size={28} />,
  },
  {
    name: "Nossa História",
    pathname: "story",
    icon: <ClockCounterClockwise size={28} />,
  },
  {
    name: "Contato",
    pathname: "contact",
    icon: <Phone size={28} />,
  },
];
