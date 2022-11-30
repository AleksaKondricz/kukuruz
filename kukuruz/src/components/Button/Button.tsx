import React, { ReactNode, HTMLAttributes } from 'react'
import './styles/Button.scss'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'filled' | 'gradient' | 'outline' | 'subtle';
    size?: 'lg' | 'md' | 'sm';
    active?: boolean;
    disabled?: boolean;

}

export const Button = ({ children, variant = 'filled', size = 'md', ...props }: ButtonProps) => {
    const classNames = `btn btn-${variant} btn-${size} ${props.active ? `btn-${variant} btn-active` : ''}`;
    return (
        <button className={classNames} {...props} >
            {children}
        </button>
    )
}