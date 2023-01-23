import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Avatar, AvatarProps } from '../Avatar';
import '../styles/Avatar.scss';

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


//Playground Avatar
export const PlaygroundAvatar = Template.bind({})

//Variants of Avatar
export const VariantsOfAvatar = () => (
    <div className="avatars-wrapper">
        <Avatar variant='square' size='lg' imageAvailable />
        <Avatar variant='round' size='lg' imageAvailable />
    </div>
)



//Sizes of Avatar
export const SizesOfAvatar = () => (
    <div className='avatars-wrapper'>
        <Avatar variant='round' size='sm' imageAvailable />
        <Avatar variant='round' size='md' imageAvailable />
        <Avatar variant='round' size='lg' imageAvailable />
        <Avatar variant='round' size='sm' />
        <Avatar variant='round' size='md' />
        <Avatar variant='round' size='lg' />
    </div>
)


//Disabled avatar
export const DisabledAvatar = () =>
    <div className="avatars-wrapper">
        <Avatar variant='round' size='lg' disabled />
        <Avatar variant='square' size='lg' disabled />
    </div >

//Avatar with badge
export const AvatarWithBadge = () =>
    <div className="avatars-wrapper" >
        <Avatar variant='round' size='lg' imageAvailable withBadge avatarStatus='active' />
        <Avatar variant='round' size='lg' imageAvailable withBadge avatarStatus='inactive' />
    </div>

//Group of avatars
export const AvatarGroup = () =>
    <div className="avatars-group" >
        <Avatar variant='round' size='lg' imageAvailable />
        <Avatar variant='round' size='lg' imageAvailable />
        <Avatar variant='round' size='lg' imageAvailable disabled />
    </div>

