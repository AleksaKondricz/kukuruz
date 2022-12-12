import React, { HTMLAttributes } from 'react'
import './styles/EditableText.scss'

export interface EditableTextProps extends HTMLAttributes<HTMLInputElement> {

    variant?: 'mainHeading' | 'subHeading' | 'paragraph';
    value?: string;


}

export const EditableText = ({value, variant}: EditableTextProps) => {
    const classNames = `editableText editableText-${variant}`
    return(
        <input type='text' value={value} className={classNames}/>
    )
}