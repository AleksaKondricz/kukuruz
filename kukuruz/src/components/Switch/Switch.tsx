import React, { HTMLAttributes } from 'react'
import './styles/Switch.scss';

export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
    variant: 'round' | 'square';
    disabled?: boolean;
    checked?: boolean;
    size?: 'sm' | 'md' | 'lg'

}
export const Switch = ({ variant, size, disabled, checked }: SwitchProps) => {
    const classNames = `switch ${size} switch-${variant}  ${disabled && 'switch-disabled'} ${checked && 'switch-checked'}`;
    return (
        <div className='switch-wrapper'>
            <span className={classNames}>
                <input id={variant + size} type='checkbox' />
                <label htmlFor={variant + size}></label>
            </span>
        </div>
    )
}