import { ReactElement } from "react";

interface IInfoButton {
  title: string;
  description: string;
  link: string;
  icon: ReactElement;
}

const InfoButton: React.FC<IInfoButton> = ({
  title,
  description,
  link,
  icon,
}): ReactElement => {
  return (
    <a
      className={`flex items-center space-x-4 cursor-pointer p-4 rounded-md shadow-2xl bg-gray-100 transition-all duration-300 ease-in-out`}
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <div
        className={` text-black bg-gray-200 w-[60px] h-[60px] p-4 rounded-md`}
      >
        {icon}
      </div>

      <div className='flex flex-col'>
        <h3 className={`text-black text-xl font-bold -sm:text-lg`}>{title}</h3>
        <p className={`text-black font-sans -sm:text-sm`}>{description}</p>
      </div>
    </a>
  );
};

export default InfoButton;
