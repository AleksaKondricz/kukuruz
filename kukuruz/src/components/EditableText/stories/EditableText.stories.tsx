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


//Playground TextInput
export const EditableTextPlayground = Template.bind({})

//Variants of TextInput
export const TextInputVariants = () => (
    <div className='editableText-wrapper'>
        <EditableText  variant='mainHeading' value='I am the main heading' />
        <EditableText  variant='subHeading' value='I am subheading'  />
        <EditableText  variant='paragraph' value='I am just a paragraph' />

    </div>
)



