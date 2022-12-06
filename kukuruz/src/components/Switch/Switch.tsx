import React, { HTMLAttributes } from 'react'
import './styles/Switch.scss';

export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
    variant: 'round' | 'square';
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg'

}
export const Switch = ({ variant, size, disabled }: SwitchProps) => {
    const classNames = `switch ${size} switch-${variant}  ${disabled ? `disabled`:``}`;
    return (
        <div className='switch-wrapper'>
            <span className={classNames}>
                <input id={variant + size} type='checkbox' />
                <label htmlFor={variant + size}></label>
            </span>
        </div>
    )
}