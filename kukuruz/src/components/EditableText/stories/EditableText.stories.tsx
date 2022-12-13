import React from 'react'
import { Meta, Story } from '@storybook/react'
import { EditableText, EditableTextProps } from '../EditableText';
import '../styles/EditableText.scss';

//meta data with the type Meta for our text input component;
const meta: Meta = {
    title: 'EditableText',
    component: EditableText,
    argTypes: {
        children: {
            defaultValue: 'Default text'
        }
    }
}

export default meta;

const Template: Story<EditableTextProps> = (args) => <EditableText {...args} />


//Playground EditableText
export const EditableTextPlayground = Template.bind({})

//Variants of EditableText
export const EditableTextVariants = () => (
    <div className='editableText-wrapper'>
        <EditableText  variant='h1' value='H1 Heading' />
        <EditableText  variant='h2' value='H2 Heading'  />
        <EditableText  variant='h3' value='H3 Heading' />
        <EditableText  variant='h4' value='H4 Heading' />
        <EditableText  variant='h5' value='H5 Heading'  />
        <EditableText  variant='h6' value='H6 Heading' />
        <EditableText  variant='p' value='Paragraph' />
        <EditableText  variant='description' value='This is a short description about the topic ...' />
        <EditableText  variant='errorMsg' value='This is an error message ...' />
        <EditableText  variant='successMsg' value='This is an success message ...' />
    </div>
)



