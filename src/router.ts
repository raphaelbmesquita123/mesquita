interface IRoute {
  name: string;
  pathname: string;
}

export const routers: IRoute[] = [
  {
    name: "Home",
    pathname: "home",
  },
  {
    name: "Serviços",
    pathname: "services",
  },
  {
    name: "Nossa História",
    pathname: "story",
  },
  {
    name: "Contato",
    pathname: "contact",
  },
];
