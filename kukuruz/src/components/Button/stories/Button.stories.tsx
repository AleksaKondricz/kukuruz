import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../Button';

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
export const Primary = () => <Button variant='filled'>Filled Button</Button>
export const Secondary = () => <Button variant='outline'>Outline Button</Button>
export const Subtle = () => <Button variant='subtle'>Subtle Button</Button>
export const Gradient = () => <Button variant='gradient'>Gradient Button</Button>

//Sizes of Buttons
export const Large = () => <Button variant='filled' size='lg'>Large Button</Button>
export const Medium = () => <Button variant='filled' size='md'>Medium Button</Button>
export const Small = () => <Button variant='filled' size='sm'>Small Button</Button>

//States of Buttons
export const Regular = () => <Button variant='filled'>Regular</Button>
export const Active = () => <Button variant='filled' active>Active</Button>
export const Disabled = () => <Button variant='filled' disabled>Disabled</Button>


