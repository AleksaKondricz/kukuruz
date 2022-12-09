
import React, { HTMLAttributes } from 'react'

export interface DropdownProps extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  options: {value: string; option: string}[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'outline';
}

export const Dropdown = ({ label, id, options, disabled, name, variant, size }: DropdownProps) => {
  const classNames = `dropdown-wrapper dropdown-${variant} dropdown-${size}`;
  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>

      <select name={name} id={id} disabled={disabled}>
        {options?.map(opt => <option value={opt.value}>{opt.option}</option>)}
      </select>
    </div>
  )
}