import { ChangeEvent, SetStateAction, useState } from 'react';

interface InputProps {
  type?: string;
  label: string;
  placeholder: string;
  className: string;
  handleChangeCallback: (arg0: string, arg1: string) => void;
  name?: string;
}

export function Input({
  type,
  label,
  placeholder,
  className,
  handleChangeCallback,
  name,
  ...props
}: InputProps) {
  const [input, setInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput(value);
    handleChangeCallback(name, value);
  };

  return (
    <div className={`flex flex-col my-4 ${className}`}>
      <label htmlFor='input' className='text-lg text-blue-400'>
        {label}
      </label>
      <input
        id='input'
        type={type || 'text'}
        placeholder={placeholder}
        className={`p-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent}`}
        onChange={handleChange}
        value={input}
        name={name}
        {...props}
      />
    </div>
  );
}
