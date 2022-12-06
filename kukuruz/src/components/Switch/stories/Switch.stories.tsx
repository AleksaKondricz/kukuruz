import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Switch, SwitchProps } from '../Switch';
import '../styles/Switch.scss';

//meta data with the type Meta for our button component;
const meta: Meta = {
    title: 'Switch',
    component: Switch,
    argTypes: {

        children: {
            defaultValue: 'Default Switch'
        }
    }
}

export default meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />


//Playground Switch
export const PlaygroundSwitch = Template.bind({})

//Variants of Switches
export const SwitchesVariants = () => (
    <div className='switch-stories-display'>
        <Switch variant='round'/>
        <Switch variant='square'/>
    </div>
)

//Sizes of Switches
export const SwitchesSizes = () => (
    <div className='switch-stories-display'>
        <Switch variant='round' size='sm' />
        <Switch variant='round' size='md' />
        <Switch variant='round' size='lg' />

    </div>
)
