import React, { ReactElement } from "react";

//components
import Separator from "@/components/separator";

interface IFormLabel {
  id: string;
  label: string;
  propsUi?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const FormLabel: React.FC<IFormLabel> = ({
  id,
  label,
  propsUi,
}): ReactElement => {
  return (
    <label
      id={id}
      className='flex items-center font-sans text-sm'
      htmlFor={id}
      aria-label={`form-label-${id}`}
      {...propsUi}
    >
      <Separator />
      <span className='ml-2 text-black'>{label}</span>
    </label>
  );
};

export default FormLabel;
