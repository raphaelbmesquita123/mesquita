import React, { ReactElement } from "react";
import Image from "next/image";
import { routers } from "@/router";

//componets
import NavBarButton from "./utils/navBarButton";

//utils
import { handleScroll } from "./utils/handleScroll";

const NavBar: React.FC = (): ReactElement => {
  return (
    <header className='sticky w-full top-0 p-0 z-30 shadow-xl '>
      <nav className='p-6 bg-gradient-to-tr from-gray-200 via-white to-neutral-300'>
        <div className='flex justify-between items-center max-w-[1400px] mx-auto -sm:flex-col'>
          <Image
            src='/logo/logo.png'
            alt='Gráfica e Editora Mesquita'
            width={160}
            height={100}
          />
          <div>
            <ul className='flex '>
              {routers.map((router) => {
                return (
                  <li className='mx-2' key={router.name}>
                    <NavBarButton
                      propsUi={{
                        onClick: () => handleScroll(router.pathname),
                      }}
                    >
                      {router.name}
                    </NavBarButton>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <Image
        src='/details.png'
        alt='details'
        width={400}
        height={200}
        className='w-full h-2'
      />
    </header>
  );
};

export default NavBar;
