
import React, { HTMLAttributes } from 'react'

export interface DropdownProps extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  options: {value: string; option: string}[];
}

export const Dropdown = ({ label, id, options,  name }: DropdownProps) => {
  const classNames = `dropdown-wrapper`;
  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>

      <select name={name} id={id}>
        {options?.map(opt => <option value={opt.value}>{opt.option}</option>)}
      </select>
    </div>
  )
}