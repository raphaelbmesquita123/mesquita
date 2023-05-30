import { ReactElement } from "react";

interface ICard {
  title: string;
  description: string;
  icon: ReactElement;
}
const Card: React.FC<ICard> = ({ title, description, icon }): ReactElement => {
  return (
    <div className='flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-gray-100'>
      <h3>{title}</h3>
      {icon}
      <p>{description}</p>
    </div>
  );
};

export default Card;
