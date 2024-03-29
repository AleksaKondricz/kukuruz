import React from 'react'
import { Meta, Story } from '@storybook/react'
import { EditableText, EditableTextProps } from '../EditableText';
import '../styles/EditableText.scss';

//meta data with the type Meta for our text input component;
const meta: Meta = {
    title: 'EditableText',
    component: EditableText,
    argTypes: {
 
    }
}

export default meta;

const Template: Story<EditableTextProps> = (args) => <EditableText {...args} defaultValue="Check me out" />


//Playground EditableText
export const EditableTextPlayground = Template.bind({})

//Variants of EditableText
export const EditableTextVariants = () => (
    <div className='editableText-wrapper'>
        <EditableText  variant='h1' defaultValue='H1 Heading' />
        <EditableText  variant='h2' defaultValue='H2 Heading'  />
        <EditableText  variant='h3' defaultValue='H3 Heading' />
        <EditableText  variant='h4' defaultValue='H4 Heading' />
        <EditableText  variant='h5' defaultValue='H5 Heading'  />
        <EditableText  variant='h6' defaultValue='H6 Heading' />
        <EditableText  variant='p' defaultValue='Paragraph' />
        <EditableText  variant='description' defaultValue='This is a short description about the topic ...' />
        <EditableText  variant='errorMsg' defaultValue='This is an error message ...' />
        <EditableText  variant='successMsg' defaultValue='This is an success message ...' />
    </div>
)



