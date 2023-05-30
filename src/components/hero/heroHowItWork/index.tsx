import React, { ReactElement } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

//components
import { Title } from "@/components/title";
import Card from "./utils/card";

//json
import deliveryAnimation from "./utils/json/deliveryAnimation.json";
import downloadAnimation from "./utils/json/downloadAnimation.json";
import emailAnimation from "./utils/json/emailAnimation.json";
import gearAnimation from "./utils/json/gearAnimation.json";

const HeroHowItWork: React.FC = (): ReactElement => {
  return (
    <section className='flex flex-col items-center mt-24'>
      <Title title='Como trabalhamos' subtitle='Nossos projetos' />
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-10 px-8 py-28 max-w-[1400px] mx-auto w-full'>
        <Card
          title='Etapa 1'
          description='Receba seu Orçaamento por email ou Whatsapp'
          icon={
            <Player
              autoplay
              loop
              src={emailAnimation}
              style={{ height: "150px", width: "150px" }}
            />
          }
        />

        <Card
          title='Etapa 2'
          description='Orçamento aprovado, nos envie o arquivo'
          icon={
            <Player
              autoplay
              loop
              src={downloadAnimation}
              style={{ height: "150px", width: "200px" }}
            />
          }
        />

        <Card
          title='Etapa 3'
          description='Aqruivo enviado para produção'
          icon={
            <Player
              autoplay
              loop
              src={gearAnimation}
              style={{ height: "150px", width: "150px" }}
            />
          }
        />

        <Card
          title='Etapa 4'
          description='Aguarde a entrega'
          icon={
            <Player
              autoplay
              loop
              src={deliveryAnimation}
              style={{ height: "150px", width: "200px" }}
            />
          }
        />
      </div>
    </section>
  );
};

export default HeroHowItWork;
