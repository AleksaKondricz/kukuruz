import React, { ReactNode, HTMLAttributes } from 'react'
import './Button.scss'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'subtle';
    size?: 'lg' | 'md' | 'sm';
    active?: boolean;
    disabled?: boolean;
}

export const Button = ({ children, variant = 'primary', size = 'md', ...props }: ButtonProps) => {
    const classNames = `btn btn-${variant} btn-${size}`;
    return (
        <button className={classNames} {...props}>
            {children}
        </button>
    )
}