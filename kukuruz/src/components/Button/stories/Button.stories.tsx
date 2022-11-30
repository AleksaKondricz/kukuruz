import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../Button';
import '../styles/Button.scss';

//meta data with the type Meta for our button component;
const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Default button'
        }
    }
}

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />


//Playground Button
export const PlaygroundButton = Template.bind({})

//Variants of Buttons
export const VariantsOfButtons = () => (
    <div className='buttons-wrapper'>
        <Button variant='filled'>Filled Button</Button>
        <Button variant='outline'>Outline Button</Button>
        <Button variant='subtle'>Subtle Button</Button>
        <Button variant='gradient'>Gradient Button</Button>
    </div>
)


//Sizes of Buttons
export const SizesOfButtons = () => (
    <div className='buttons-wrapper'>
        <Button variant='filled' size='sm'>Small Button</Button>
        <Button variant='filled' size='md'>Medium Button</Button>
        <Button variant='filled' size='lg'>Large Button</Button>
    </div >
)


//States of Buttons
export const StatesOfButtons = () => (
    <div className='buttons-wrapper'>
        <Button variant='filled'>Regular</Button>
        <Button variant='filled' active>Active</Button>
        <Button variant='filled' disabled>Disabled</Button>
        <Button variant='outline'>Regular</Button>
        <Button variant='outline' active>Active</Button>
        <Button variant='outline' disabled>Disabled</Button>
        <Button variant='gradient'>Regular</Button>
        <Button variant='gradient' active>Active</Button>
        <Button variant='gradient' disabled>Disabled</Button>
        <Button variant='subtle'>Regular</Button>
        <Button variant='subtle' active>Active</Button>
        <Button variant='subtle' disabled>Disabled</Button>

    </div>
)


