import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  type?: string;
  additionalInputClassNames?: string;
  errorText?: string;
  value: any;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({
  label,
  id,
  errorText,
  additionalInputClassNames,
  type,
  name,
  value,
  onChange,
  ...rest
}: TextFieldProps) {
  const inputDynamicClassNames = `h-10 px-3 w-full text-sm text-[#8707ff] rounded outline-none border-2 border-[#8707ff]`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const labelClass = `transform transition-all absolute top-2 left-0 px-2 text-secondary group-focus-within:text-[#8707ff] group-focus-within:-translate-y-4 group-focus-within:translate-x-1.5 group-focus-within:text-[10px] group-focus-within:bg-white ${
    value && '-translate-y-4 text-[10px] translate-x-1.5 bg-white'
  }`;

  return (
    <div className='w-full flex flex-col'>
      <div className='relative group item-center w-full'>
        <input
          type={type}
          name={name}
          onChange={handleChange}
          value={value}
          id={name}
          className={inputDynamicClassNames}
          {...rest}
        />
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      </div>
      {errorText && (
        <span className='text-red-600 text-sm m-1'>{errorText}</span>
      )}
    </div>
  );
}

TextField.defaultProps = {
  label: '',
  id: '',
  type: 'text',
  additionalInputClassNames: '',
  errorText: '',
};
