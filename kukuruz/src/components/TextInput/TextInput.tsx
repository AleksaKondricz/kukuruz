import React, { HTMLAttributes } from 'react'
import { IconCircleCheck, IconAlertCircle, IconUser } from '@tabler/icons'

import './styles/TextInput.scss'

export interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password' | 'number';
    variant?: 'subtle' | 'outline';
    label?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    state?: 'untouched' | 'focused' | 'disabled' | 'success' | 'error';
    withIcon?: boolean;


}

export const TextInput = ({ type, label, placeholder, variant, size, state, withIcon }: TextInputProps) => {
    const classNames = `text-input-wrapper text-input-${size} text-input-${variant} text-input-${state} ${withIcon && 'text-input-with-icon'}`
    return (
        <div className={classNames}>
            {withIcon && <div className='icon-start'><IconUser stroke='1.8' color='#33333350' fill='#33333350' size='18' /></div>}
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
            {state === 'success' && <IconCircleCheck stroke='1.8' size='18' color='#008D4C' />}
            {state === 'error' && <IconAlertCircle stroke='1.8' size='18' color='#cc444b' />}
        </div>
    )
}