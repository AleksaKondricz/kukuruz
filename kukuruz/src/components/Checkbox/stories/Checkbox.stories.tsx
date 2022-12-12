import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Checkbox, CheckboxProps } from '../Checkbox';
import '../styles/Checkbox.scss';

//meta data with the type Meta for our Checkbox component;
const meta: Meta = {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {

        children: {
            defaultValue: 'Default Checkbox'
        }
    }
}

export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />


//Playground Checkbox
export const PlaygroundCheckbox = Template.bind({})


//Variants of Checkboxes





//States of Checkboxes
export const StatesOfCheckboxes = () => (
    <div className='checkboxes-wrapper'>
        <Checkbox label='Not checked yet' />
        <Checkbox checked label='I am checked' />
        <Checkbox disabled label='I am disabled' />
        <Checkbox disabled checked label='I am checked & disabled' />
    </div>
)


