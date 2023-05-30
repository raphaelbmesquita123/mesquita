import React, { useRef } from "react";
import Head from "next/head";
import NavBar from "@/components/navBar";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

//components
import HeroContactUs from "@/components/hero/heroContactUs";
import HeroHowItWork from "@/components/hero/heroHowItWork";
import HeroOurStory from "@/components/hero/heroOurStory";
import HeroHeader from "@/components/hero/heroHeader";
import HeroSocial from "@/components/hero/heroSocial";
import HeroWorks from "@/components/hero/heroWorks";
import { Footer } from "@/components/footer";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className='bg-white'>
      <Head>
        <title>Gráfica e Editora Mesquita</title>
        <meta
          name='description'
          content='Seu parceiro confiável em serviços de impressão e design gráfico. Oferecemos uma ampla gama de soluções para atender às suas necessidades de impressão.'
        />
        <meta
          name='keywords'
          content='gráfica, impressão, design gráfico, serviços de impressão, impressão digital, impressão em grande formato, banner, folder, cartão de visita'
        />
        <meta name='author' content='Nome da sua gráfica' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
      </Head>
      <NavBar />
      <HeroHeader />
      <div className='flex items-center justify-center relative bg-gray-100 px-4 py-20'>
        <Image
          src='/black-details.png'
          alt='details'
          width={400}
          height={100}
          className='absolute top-[-20px] right-0 w-[400px] -sm:w-[300px]'
        />
        <span className='font-bold text-[50px] rotate-6 text-green-600'>
          {Number(new Date().getFullYear()) - 1992}&nbsp;
        </span>
        <h1 className='text-center text-3xl uppercase text-black -sm:text-left -sm:text-2xl'>
          anos fazendo historia
        </h1>
      </div>
      <HeroSocial />
      <HeroHowItWork />
      <motion.section
        ref={targetRef}
        style={{
          opacity,
        }}
      >
        <HeroWorks />
      </motion.section>
      <HeroOurStory />
      <HeroContactUs />
      <Footer />
    </main>
  );
}
