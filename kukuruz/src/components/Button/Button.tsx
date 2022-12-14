import React, { ReactNode, HTMLAttributes } from 'react'
import { IconArrowNarrowRight } from '@tabler/icons';
import './styles/Button.scss'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'filled' | 'gradient' | 'outline' | 'subtle' | 'icon';
    radius?: 'none' | 'with-radius';
    size?: 'lg' | 'md' | 'sm';
    active?: boolean;
    disabled?: boolean;
    withIcon?:boolean;

}

export const Button = ({ children, variant = 'filled', withIcon, radius = 'with-radius', size = 'md', ...props }: ButtonProps) => {
    const classNames = `btn btn-${variant} btn-${radius} btn-${size} ${props.active ? `btn-${variant} btn-active` : ''}`;
    return (
        <button className={classNames} {...props} >
            {children}
            {withIcon && <span className='right-icon'><IconArrowNarrowRight/></span>}
        </button>
    )
}