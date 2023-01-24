import React, { HTMLAttributes, useState } from 'react'
import './styles/EditableText.scss'

export interface EditableTextProps extends HTMLAttributes<HTMLDivElement> {

    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'description' | 'errorMsg' | 'successMsg';
    defaultValue?: string;


}

export const EditableText = ({ variant, defaultValue }: EditableTextProps) => {
    const [value, setValue] = useState(defaultValue)
    const classNames = `editableText editableText-${variant}`

    return (
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} className={classNames} />

    )
}