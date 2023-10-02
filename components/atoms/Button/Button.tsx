import React, { ButtonHTMLAttributes, FormEvent } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon' | 'text';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leadingIcon?: string;
  trailingIcon?: {
    alt: string;
    height: number;
    icon: string;
    width: number;
  };
  isFullWidthOnMobile?: boolean;
  onClick: (event: any) => void;
  isLoading?: boolean;
  additionalButtonClassName?: string;
  fullWidth?: boolean;
  isDisabled?: boolean;
  alt?: string;
}

export function Button({
  variant,
  onClick,
  isLoading = false,
  additionalButtonClassName,
  fullWidth,
  isDisabled = false,
  isFullWidthOnMobile,
  trailingIcon,
  children,
  ...rest
}: ButtonProps) {
  const buttonDynamicClassName = clsx(
    {
      'transform transition-all text-sm md:text-base text-center text-white rounded-tr-none rounded-bl-none rounded-lg font-semibold hover:bg-none flex gap-1 items-center':
        true,
      'hover:bg-purple-900 hover:text-white bg-[#8707ff] border-2 border-purple-600 text-white p-2 text-center flex justify-center':
        variant === 'primary',
      'bg-white border border-gray-800 text-black px-4 py-2.5 md:px-8':
        variant === 'secondary',
      'text-primary hover:brightness-70 dark:text-white px-4 py-2 md:px-8 md:py-3':
        variant === 'tertiary',
      'font-base bg-white hover:bg-none dark:bg-gray-900 dark:text-primary':
        variant === 'text',
      'flex items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-neutral-600 border-0 px-3 py-2':
        variant === 'icon',
      'w-full': fullWidth,
      'w-full sm:w-fit': isFullWidthOnMobile,
      'opacity-50 cursor-not-allowed': isDisabled || isLoading,
    },
    additionalButtonClassName
  );

  return (
    <button
      disabled={isDisabled}
      className={buttonDynamicClassName}
      onClick={onClick}
      type='button'
      {...rest}
    >
      {isLoading ? 'loading...' : children}
      {trailingIcon && (
        <Image
          src={trailingIcon.icon}
          width={trailingIcon.width}
          height={trailingIcon.height}
          alt={trailingIcon.alt}
        />
      )}
    </button>
  );
}

Button.defaultProps = {
  fullWidth: false,
  isDisabled: false,
  isLoading: false,
  additionalButtonClassName: '',
  isFullWidthOnMobile: false,
};
