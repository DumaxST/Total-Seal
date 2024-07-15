import React from 'react'
import classNames from 'classnames';

const VARIANT_STYLES = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    success: 'bg-green-500 hover:bg-green-700 text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
} as const;

type Variant = keyof typeof VARIANT_STYLES;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
    const buttonClass = classNames(
        'py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2',
        VARIANT_STYLES[variant],
        className
    );
    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    )
}
