import { ReactElement } from "react";

interface IInfoButton {
  title: string;
  description: string;
  link: string;
  icon: ReactElement;
  color?: "light" | "blue";
}

const InfoButton: React.FC<IInfoButton> = ({
  title,
  color = "blue",
  description,
  link,
  icon,
}): ReactElement => {
  return (
    <a
      className={`flex items-center space-x-4 cursor-pointer p-4 rounded-md shadow-2xl
      ${
        color === "blue" ? "bg-blue-800 hover:bg-blue-900" : "bg-white"
      }  transition-all duration-300 ease-in-out`}
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <div
        className={`
        ${
          color === "blue" ? "text-white bg-blue-900" : "text-black bg-gray-200"
        }
         w-[60px] h-[60px] p-4 rounded-md`}
      >
        {icon}
      </div>

      <div className='flex flex-col'>
        <h3
          className={`
         ${color === "blue" ? "text-white" : "text-black"}
        text-xl font-bold`}
        >
          {title}
        </h3>
        <p
          className={`
         ${color === "blue" ? "text-white" : "text-black"}
          font-sans`}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default InfoButton;
