import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSocial: React.FC = (): ReactElement => {
  return (
    <div className='fixed right-4 bottom-4 bg-white border-r-4 rounded-lg -md:bottom-10 z-10'>
      <div className='flex gap-4 relative p-4 shadow-xl -md:flex-col'>
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

        <Image
          src='/details-horizontal.png'
          width={100}
          height={100}
          alt='details-horizontal'
          className='absolute h-full w-2 top-0 right-[-4px] '
        />
      </div>
    </div>
  );
};

export default HeroSocial;
