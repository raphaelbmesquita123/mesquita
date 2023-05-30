import React from "react";
import { RegisterOptions, FieldValues, useFormContext } from "react-hook-form";

//components
import FormLabel from "../utils/formLabel";

interface IFormInput {
  id: string;
  size?: "md" | "lg";
  icon?: React.ReactNode;
  label: string;
  propsUi?: React.InputHTMLAttributes<HTMLInputElement>;
  validationOptions?: RegisterOptions<FieldValues>;
}
export function FormInput({
  id,
  size = "md",
  icon,
  label,
  propsUi,
  validationOptions,
}: IFormInput) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col space-y-1'>
      <FormLabel id={id} label={label} />
      <div className='relative'>
        <input
          id={id}
          aria-label={`form-input-${id}`}
          className={`
              bg-white
              text-zinc-900
              border-2
              font-sans 
              rounded-lg
              border-gray-200 
              focus:outline-none 
              focus:border-zinc-500 
              w-[100%]
              px-4
              py-2
              ${size === "md" && "py-2"}
              ${size === "lg" && "py-3"}
              ${icon && "pl-9"}
            `}
          {...propsUi}
          {...register(id, validationOptions)}
        />
        {icon && (
          <div className='absolute top-[50%] translate-y-[-50%] left-3 text-zinc-500'>
            {icon}
          </div>
        )}
      </div>

      <span className='text-red-500 text-bold font-sans text-xs'>
        {errors[id] && (errors[id]?.message as string)}
      </span>
    </div>
  );
}
