import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Avatar, AvatarProps } from '../Avatar';

//meta data with the type Meta for our button component;
const meta: Meta = {
    title: 'Avatar',
    component: Avatar,
    argTypes: {

        children: {
            defaultValue: 'Default avatar'
        }
    }
}

export default meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />


//Playground Button
export const PlaygroundAvatar = Template.bind({})

//Variants of Buttons
export const Round = () => <Avatar variant='round' size='md' />
export const Square = () => <Avatar variant='square' size='md' />


//Sizes of Buttons
export const Large = () => <Avatar variant='round' size='sm' />
export const Medium = () => <Avatar variant='round' size='md' />
export const Small = () => <Avatar variant='round' size='lg' />




