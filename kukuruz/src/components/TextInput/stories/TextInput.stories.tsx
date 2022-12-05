import React from 'react'
import { Meta, Story } from '@storybook/react'
import { TextInput, TextInputProps } from '../TextInput';
import '../styles/TextInput.scss';

//meta data with the type Meta for our text input component;
const meta: Meta = {
    title: 'TextInput',
    component: TextInput,
    argTypes: {
        children: {
            defaultValue: 'Default button'
        }
    }
}

export default meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />


//Playground TextInput
export const TextInputPlayground = Template.bind({})

//Variants of TextInput
export const TextInputVariants = () => (
    <div className='inputs-wrapper'>
        <TextInput type='text' variant='subtle' placeholder='I am subtle ...' size='sm' />
        <TextInput type='text' variant='subtle' placeholder='I am subtle and focused...' size='sm' state='focused' />
        <TextInput type='text' variant='subtle' placeholder='I am subtle and disabled' size='sm' state='disabled' />
        <TextInput type='text' variant='subtle' placeholder='I am subtle and success ...' size='sm' state='success' />
        <TextInput type='text' variant='subtle' placeholder='I am subtle and error ...' size='sm' state='error' />
    </div>
)
//Types of TextInput
export const TextInputTypes = () => (
    <div className='inputs-wrapper'>
        <TextInput label='Text input' type='text' placeholder='I am a text input ...' size='sm' />
        <TextInput label='Number input' type='number' placeholder='I am a number input ...' size='sm' />
        <TextInput label='Password input' type='password' placeholder='I am a password input ...' size='sm' />
    </div>
)

//Sizes of TextInput
export const TextInputSizes = () => (
    <div className='inputs-wrapper'>
        <TextInput type='text' placeholder='I am a small text input ...' size='sm' />
        <TextInput type='text' placeholder='I am a small text input ...' size='md' />
        <TextInput type='text' placeholder='I am a small text input ...' size='lg' />
    </div>
)

//States of TextInput
export const TextInputStates = () => (
    <div className='inputs-wrapper'>
        <TextInput type='text' placeholder="I'm untouched input ..." size='sm' />
        <TextInput type='text' placeholder="I'm focused input ..." size='sm' state='focused' />
        <TextInput type='text' placeholder="I'm disabled input ..." size='sm' state='disabled' />
        <TextInput type='text' placeholder="I'm success" size='sm' state='success' />
        <TextInput type='text' placeholder="Oh no! There is an error" size='sm' state='error' />
    </div>
)

//With or without icon
export const TextInputWithIcon = () => (
    <TextInput type='text' withIcon placeholder='Input with icon ... ' size='sm' />
)
