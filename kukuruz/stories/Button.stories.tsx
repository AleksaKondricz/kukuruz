import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from '../src/Button';

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
export const Primary = () => <Button variant='primary'>Secondary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Subtle = () => <Button variant='subtle'>Subtle</Button>

//Sizes of Buttons
export const Large = () => <Button variant='primary' size='lg'>Large</Button>
export const Medium = () => <Button variant='primary' size='md'>Medium</Button>
export const Small = () => <Button variant='primary' size='sm'>Small</Button>

//States of Buttons
export const Regular = () => <Button variant='primary'>Regular</Button>
export const Active = () => <Button variant='primary' active>Active</Button>
export const Disabled = () => <Button variant='primary' disabled>Disabled</Button>
