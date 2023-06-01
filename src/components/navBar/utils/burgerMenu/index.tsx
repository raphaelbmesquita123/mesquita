import React, { ReactElement, useState } from "react";
import { List, X } from "phosphor-react";
import { routers } from "@/router";
import Image from "next/image";
import Link from "next/link";

//utils
import { handleScroll } from "../handleScroll";

const BurgerMenu: React.FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (id: string) => {
    setIsOpen(!isOpen);
    handleScroll(id);
  };

  return (
    <>
      <div
        className={`${
          isOpen
            ? "bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-30"
            : "left-[-100%]"
        } transition-all duration-200 ease-in-out`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`flex flex-col justify-between fixed top-0 bg-gray-200 ${
          isOpen ? "left-[0]" : "left-[-100%]"
        } w-[60%] h-full z-40 transition-all duration-500 ease-in-out py-4`}
      >
        <X
          className='text-black absolute top-8 left-5 cursor-pointer'
          size={26}
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className='space-y-2 mt-[100px]'>
          <li className='flex justify-center mb-10'>
            <Image
              src='/logo/logo.png'
              alt='Gráfica e Editora Mesquita'
              width={160}
              height={100}
              className='cursor-pointer'
              onClick={() => handleClick("home")}
            />
          </li>
          {routers?.map((router) => {
            return (
              <li
                key={router.name}
                className='flex items-center space-x-2 px-6 py-4 w-[90%] mx-auto rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out'
                onClick={() => handleClick(router.pathname)}
              >
                <div className='text-black'>{router.icon}</div>
                <small className='text-black '>{router.name}</small>
              </li>
            );
          })}
        </ul>
        <div className='flex justify-center gap-4 relative p-4 '>
          <Link href='https://www.google.com/' passHref target='_blank'>
            <Image
              src='/social/facebook.png'
              width={30}
              height={30}
              alt='details-vertical'
            />
          </Link>

          <Link href='https://www.google.com/' passHref target='_blank'>
            <Image
              src='/social/insta.png'
              width={30}
              height={30}
              alt='details-vertical'
            />
          </Link>

          <Link href='https://www.google.com/' passHref target='_blank'>
            <Image
              src='/social/whatsapp.png'
              width={30}
              height={30}
              alt='details-vertical'
            />
          </Link>
        </div>
      </div>
      <List
        className='text-black hidden cursor-pointer -sm:block'
        size={28}
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default BurgerMenu;
