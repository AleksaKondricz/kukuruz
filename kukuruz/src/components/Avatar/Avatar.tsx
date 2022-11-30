import React from 'react'
import avatarSVG from '../../static/jpg/avatar-portrait.jpg';
import './styles/Avatar.scss';

export interface AvatarProps {
    variant: 'round' | 'square',
    size: 'sm' | 'md' | 'lg',
    disabled?: boolean;
    imageAvailable?: boolean;

}
export const Avatar = ({ variant, size, disabled, imageAvailable }: AvatarProps) => {
    const classNames = `avatar avatar-${variant} avatar-${size} ${disabled && 'avatar-disabled'} ${!imageAvailable && 'avatar-text'}`;
    return (
        <div className={classNames}>
            {imageAvailable ? <img src={avatarSVG} alt='' /> : 'AK'}
        </div>
    )
}