import React from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

//componets
// import { Button } from "@/components/form/button";
import Separator from "@/components/separator";
import { routers } from "@/router";
import NavBarButton from "../navBar/utils/navBarButton";
import { handleScroll } from "../navBar/utils/handleScroll";
import { Envelope, MapPinLine, Phone, XCircle } from "phosphor-react";
import InfoButton from "../hero/heroContactUs/utils/infoButton";

export function Footer() {
  const { pathname } = useRouter();

  return (
    // bg-[linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.95)),url(/food-background.png)]
    <footer className='relative bg-gradient-to-tr from-gray-200 via-white to-neutral-300 pt-10 -sm:pb-20'>
      <div className='grid grid-cols-3 mx-auto max-w-[1400px] py-20 px-8 gap-14 -xl:grid-cols-2 -md:grid-cols-1 '>
        <div className='flex flex-col gap-4'>
          <Image
            className='cursor-pointer mb-2'
            src='/logo/logo.png'
            alt='texas logo'
            width={200}
            height={100}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />

          <InfoButton
            title='Localização'
            description='Av Manoel de Souze Chaves, 2585, São Caetano, Itabuna - Ba'
            link='https://goo.gl/maps/kEJNGkwtH9EdayBh6'
            icon={<MapPinLine size={28} />}
            color='light'
          />

          <InfoButton
            title='Contato'
            description='73 3617-1831'
            link='tel:+55 73 3617 1831'
            icon={<Phone size={28} />}
            color='light'
          />

          <InfoButton
            title='Email'
            description='orcamento@graficamesquita.com'
            link='mailto:orcamento@graficamesquita.com'
            icon={<Envelope size={28} />}
            color='light'
          />
        </div>
        <div>
          <h1 className='flex items-center gap-4 text-primary-600 mb-4 text-2xl px-4'>
            <Separator />
            Links
          </h1>
          <ul className='flex flex-col space-y-2'>
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

        <div className='flex flex-col gap-4'>
          <h1 className='flex items-center gap-4 text-primary-600 mb-4 text-2xl px-4'>
            <Separator />
            Horário de Funcionamento
          </h1>
          <p className='text-black font-sans'>Segunda - Sexta</p>
          <p className='text-black font-sans'>7:30 - 6:15</p>
        </div>
      </div>
      {/* <div>
        <div className='bg-gray-300 p-2'>
          <h4 className='text-black text-center'>
            Criado por: Raphael Mesquita
          </h4>
        </div>
      </div> */}
    </footer>
  );
}
