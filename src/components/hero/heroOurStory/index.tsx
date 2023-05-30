import { ReactElement, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

//components
import { Title } from "@/components/title";
import Carousel from "./utils/carousel";

const HeroOurStory: React.FC = (): ReactElement => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  return (
    <section
      id='story'
      className='flex flex-col items-center space-y-6 bg-gray-200 relative py-32 overflow-hidden -sm:py-16'
    >
      <Title title='Sobre nos' subtitle='Como tudo começou' />
      <motion.div
        style={{
          scale,
        }}
        className='grid grid-cols-[2fr_1fr] items-center max-w-[1400px] mx-auto -xl:grid-cols-1'
      >
        <div className='relative h-[600px] border-[14px]  rounded-lg border-white -md:h-[400px]'>
          <Carousel
            images={[
              "/history/photo-1.jpg",
              "/history/photo-2.jpg",
              "/history/photo-3.jpg",
              "/history/photo-4.jpg",
            ]}
          />
        </div>
        <div className='flex flex-col space-y-4 relative p-14 h-auto bg-green-50'>
          <h1 className='text-black font-oswald text-4xl'>Nossa Historia</h1>
          <p className='text-black text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, numquam omnis a temporibus minus sit nisi. Architecto
            rerum iusto qui quod velit alias quasi laudantium saepe tempora,
            voluptatum quaerat fugit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur, numquam omnis a temporibus minus sit
            nisi. Architecto rerum iusto qui quod velit alias quasi laudantium
            saepe tempora, voluptatum quaerat fugit!
          </p>
          <Image
            src='/black-details-horizontal.png'
            alt='details'
            width={60}
            height={40}
            className='absolute bottom-[-30px] right-[-40px]'
          />
          <Image
            src='/black-details.png'
            alt='details'
            width={400}
            height={40}
            className='absolute bottom-[-30px] right-[20px]'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroOurStory;
