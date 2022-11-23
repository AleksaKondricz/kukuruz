import React, { ReactNode, HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary' | 'subtle';
    size?: 'lg' | 'md' | 'sm';
    active?: boolean;
    disabled?: boolean;
}

export const Button = ({ children, variant = 'primary', size = 'md', ...props }: ButtonProps) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}