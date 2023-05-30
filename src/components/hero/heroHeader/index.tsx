import React, { ReactElement, useState } from "react";

const HeroHeader = (): ReactElement => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const divElement = event.target as HTMLElement;
    const divRect = divElement.getBoundingClientRect();
    const relativeX = mouseX - divRect.left;
    const relativeY = mouseY - divRect.top;
    setMousePosition({ x: Number(relativeX), y: Number(relativeY) });
  };

  return (
    <div
      id='home'
      className='grid grid-cols-[2fr_1fr] relative h-[calc(100vh_-_110px)] overflow-hidden -md:grid-cols-1 -md:grid-rows-[4fr_1fr]'
    >
      <div
        className={`hidden relative w-full h-full overflow-hidden bg-cover bg-center -md:block 
        `}
        style={{
          backgroundImage: "url(/macaw.jpg)",
        }}
      />
      <div
        className={`block relative w-full h-full overflow-hidden bg-cover bg-center grayscale-[100%] hover:grayscale-0 -md:hidden
        `}
        style={{
          backgroundImage: "url(/macaw.jpg)",
        }}
        onMouseMove={(event: any) => handleMouseMove(event)}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div
          arial-label='macaw'
          style={{
            top: mousePosition.y - 570,
            left: mousePosition.x - 570,
            boxShadow: isMouseOver
              ? "0px 0px 0px 99999px rgba(50, 50, 50, 0.4)"
              : "none",
          }}
          className={`absolute w-[600px] h-[600px]  rounded-full blur-2xl transform transition-shadow duration-500 ease-in-out
        
          `}
        />
      </div>

      <div
        className='flex relative items-center w-full md:h-full p-10 bg-green-50 
      
      '
      >
        <div
          className={`relative border-[10px] border-white max-w-[500px] p-10 ml-[-100px] shadow-xl rounded-lg pointer-events-none ${
            isMouseOver ? "bg-green-500" : "bg-gray-200"
          } transition-colors duration-500 ease-in-out
          -md:ml-0 -md:w-[220px] -md:mt-[-150px] -md:p-5 -md:bg-green-500 -md:space-y-2
          `}
        >
          <h1
            className={`font-oswald font-bold text-[60px] uppercase leading-tight  ${
              isMouseOver ? "text-white" : "text-gray-500"
            }
              -md:text-[20px] -md:text-center -md:text-white
            `}
          >
            Qualidade e criatividade
          </h1>
          <h1 className='font-oswald font-bold text-[60px] text-zinc-950 uppercase leading-tight -md:text-[20px] -md:text-center'>
            impressas em cada detalhe.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
