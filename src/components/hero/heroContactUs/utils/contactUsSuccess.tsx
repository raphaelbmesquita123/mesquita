import { Title } from "@/components/title";
import { XCircle } from "phosphor-react";

interface IContactUsSuccess {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ContactUsSuccess({ isOpen, setIsOpen }: IContactUsSuccess) {
  if (!isOpen) return null;
  return (
    <div className='fixed flex flex-col gap-2 items-center justify-center top-0 left-0 bg-[rgba(0,0,0,0.8)] w-full h-full z-[9999]'>
      <XCircle
        size={50}
        className='absolute top-10 left-10 text-[60px] text-zinc-300 cursor-pointer -sm:text-3xl'
        onClick={() => setIsOpen(false)}
      />
      <div className='w-[80%]'>
        <Title
          propsUi={{
            className: "text-center",
          }}
          color='light'
          title='Obrigado! 😁'
          subtitle='Em breve entraremos em contato com você'
        />
      </div>
    </div>
  );
}
