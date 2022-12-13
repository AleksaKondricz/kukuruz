import React, { HTMLAttributes } from 'react'
import './styles/EditableText.scss'

export interface EditableTextProps extends HTMLAttributes<HTMLDivElement> {

    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'description' | 'errorMsg' | 'successMsg';
    value?: string;


}

export const EditableText = ({ variant, value }: EditableTextProps) => {
    const classNames = `editableText editableText-${variant}`
    return (
        <div contentEditable className={classNames}>
            {value}
        </div>
    )
}