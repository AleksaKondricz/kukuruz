
import React, {HTMLAttributes} from 'react'

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement>{
   label?: string;
   disabled?: boolean;
   checked?: boolean;
   id?: string;
   name?: string;

}

export const Checkbox = ({label, id, disabled, checked,   name}:CheckboxProps) => {
    const classNames = `checkbox-wrapper `;
    return(
        <div className={classNames}>
        <input type="checkbox" id={id} name={name} checked={checked} disabled={disabled} />
        <label htmlFor={name}>{label}</label>
      </div>
    )
}