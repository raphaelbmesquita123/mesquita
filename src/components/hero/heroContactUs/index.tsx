import React, { ReactElement, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MapPinLine, Envelope, Phone, User } from "phosphor-react";

//components
import { FormTextarea } from "./utils/formTextarea";
import { FormInput } from "./utils/formInput";
import { Loader } from "@/components/loader/loader";
import { Title } from "@/components/title";
import { ContactUsSuccess } from "./utils/contactUsSuccess";
import InfoButton from "./utils/infoButton";

//utils
// import { ContactUsSuccess } from "./utils/contactUsSuccess";

//config
// import { SERVICES_EMAIL_ENDPOINT } from "@/config/endPoints";

interface IContactUs {
  name: string;
  email: string;
  contact_number: string;
  message: string;
}

const HeroContactUs: React.FC = (): ReactElement => {
  const form = useForm<IContactUs>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, reset } = form;

  async function onSubmit(data: IContactUs) {
    // setIsLoading(true);
    // try {
    //   await api.post(SERVICES_EMAIL_ENDPOINT, {
    //     email: data?.email,
    //     name: data?.name,
    //     contact_number: data?.contact_number,
    //     message: data?.message,
    //   });
    //   setIsSuccess(true);
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setTimeout(() => {
    //     reset();
    //     setIsLoading(false);
    //   }, 1000);
    // }
  }

  return (
    <div
      id='contact'
      className='flex flex-col justify-center items-center px-20 py-24 bg-blue-800 -xl:py-20 -xl:px-0'
    >
      <ContactUsSuccess isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <Loader isLoading={isLoading} />
      <Title title='Contate-nos' subtitle='Entre em contato' color='light' />
      <div className='grid grid-cols-2 relative gap-20 p-20 mt-14 rounded-lg max-w-[1400px] bg-blue-700 shadow-2xl z-20 -2xl:grid-cols-1 -xl:pt-20 -xl:mt-28 -xl:p-10 -md:p-5 -md:pt-20'>
        <div className='flex flex-col mx-4'>
          <div className='flex flex-col gap-4'>
            <p className='text-white p-4 font-sans text-justify'>
              Obrigado pela sua mensagem! Faremos o nosso melhor para responder
              o mais rápido possível. Por favor, forneça-nos suas informações de
              contato e uma mensagem detalhada para que possamos ajudá-lo de
              forma mais eficaz.
            </p>

            <InfoButton
              title='Localização'
              description='Av Manoel de Souze Chaves, 2585, São Caetano, Itabuna - Ba'
              link='https://goo.gl/maps/kEJNGkwtH9EdayBh6'
              icon={<MapPinLine size={28} />}
            />

            <InfoButton
              title='Contato'
              description='73 3617-1831'
              link='tel:+55 73 3617 1831'
              icon={<Phone size={28} />}
            />

            <InfoButton
              title='Email'
              description='orcamento@graficamesquita.com'
              link='mailto:orcamento@graficamesquita.com'
              icon={<Envelope size={28} />}
            />
          </div>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.330045608915!2d-39.27305978515735!3d-14.806723389671415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aa6e2c6837f7%3A0x16af50e775cf8eb0!2sGr%C3%A1fica%20e%20Editora%20Mesquita!5e0!3m2!1spt-BR!2sie!4v1685472891818!5m2!1spt-BR!2sie'
            width='100%'
            height='200'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='mt-20 shadow-2xl'
          />
        </div>
        <FormProvider {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-6 justify-between bg-gray-100 rounded-md p-4 shadow-2xl mx-4'
          >
            <div className='space-y-6'>
              <FormInput
                id='name'
                label='Name'
                size='lg'
                propsUi={{
                  type: "text",
                  "aria-label": "Name",
                  placeholder: "Name",
                }}
                validationOptions={{
                  required: "Name is required",
                }}
                icon={<Phone size={20} />}
              />
              <FormInput
                id='email'
                label='Email'
                size='lg'
                propsUi={{
                  type: "email",
                  "aria-label": "email",
                  placeholder: "Email",
                }}
                validationOptions={{
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                }}
                icon={<Phone size={20} />}
              />
              <FormInput
                id='contact_number'
                label='Contact Number'
                size='lg'
                propsUi={{
                  type: "tel",
                  "aria-label": "contact_number",
                  placeholder: "000 000 0000",
                }}
                validationOptions={{
                  required: "Contact Number is required",
                  pattern: {
                    value: /^\d{6,}$/,
                    message: "Please enter a valid contact number",
                  },
                }}
                icon={<Phone size={20} />}
              />
              <FormTextarea
                label='Message'
                id='message'
                propsUi={{
                  "aria-label": "message",
                  placeholder: "Message",
                  style: { height: "100%" },
                }}
                validationOptions={{
                  required: "Message is required",
                }}
              />
            </div>
            <button className='flex justify-center items-center justify-self-end space-x-4 bg-blue-900 h-[60px] rounded-md transition-all duration-300 ease-in-out hover:bg-blue-800 active:scale-[96%]'>
              <Envelope size={28} className='text-white' />
              <span className='font-oswald text-lg text-white'>Enviar</span>
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default HeroContactUs;
