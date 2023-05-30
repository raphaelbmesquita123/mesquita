import React from "react";
import { RegisterOptions, FieldValues, useFormContext } from "react-hook-form";

//components
import Separator from "@/components/separator";
import FormLabel from "../utils/formLabel";

interface IFormTextarea {
  id: string;
  label: string;
  propsUi?: React.InputHTMLAttributes<HTMLTextAreaElement>;
  validationOptions?: RegisterOptions<FieldValues>;
}

export function FormTextarea({
  id,
  label,
  propsUi,
  validationOptions,
}: IFormTextarea) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col space-y-1'>
      <FormLabel id={id} label={label} />
      <textarea
        id={id}
        aria-label={`form-input-${id}`}
        className='
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
          min-h-[150px]
          disabled:opacity-50
          '
        {...propsUi}
        {...register(id, validationOptions)}
      />

      <span className='text-red-500 font-sans text-xs'>
        {errors[id] && (errors[id]?.message as string)}
      </span>
    </div>
  );
}
