import React from "react";
import Image from "next/image";

interface ITitle {
  title?: string;
  alignTitle?: "text-start" | "text-center" | "text-end";
  subtitle?: string;
  color?: "light" | "dark";
  propsUi?: React.HTMLAttributes<HTMLDivElement>;
}
export function Title({
  title,
  alignTitle = "text-center",
  color = "dark",
  subtitle,
  propsUi,
}: ITitle) {
  return (
    <div
      {...propsUi}
      className={`flex flex-col items-center gap-4 ${propsUi?.className}`}
    >
      <h3
        className={`${
          color === "dark" ? "text-black" : "text-white"
        } uppercase text-base font-oswald `}
      >
        {subtitle}
      </h3>
      <Image
        src='/details.png'
        alt='detail'
        width={280}
        height={20}
        className='w-[50%] h-2'
      />
      <h1
        className={`text-[3rem] ${alignTitle} ${
          color === "dark" ? "text-black" : "text-white"
        } capitalize -md:text-[2.5rem]`}
      >
        {title}
      </h1>
    </div>
  );
}
