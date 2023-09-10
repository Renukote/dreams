import { MouseEvent } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({
  onClick,
  className,
  type,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-green-600 text-white text-center ${className}`}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  );
}
