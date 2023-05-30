import { ReactElement } from "react";

interface INavBarButton {
  children: React.ReactNode;
  propsUi?: React.HTMLAttributes<HTMLButtonElement>;
}

const NavBarButton = ({ children, propsUi }: INavBarButton): ReactElement => {
  return (
    <button
      {...propsUi}
      className='mt-2 cursor-pointer text-black after:block after:bg-transparent after:h-1 after:bottom-0 after:rounded-xl after:transform after:transition-colors after:duration-500 after:ease-in-out hover:after:bg-blue-600 text-black'
    >
      {children}
    </button>
  );
};

export default NavBarButton;
