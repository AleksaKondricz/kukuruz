import React from 'react'
import avatarSVG from '../../static/jpg/avatar-portrait.jpg';
import './styles/Avatar.scss';

export interface AvatarProps {
    variant: 'round' | 'square',
    size: 'sm' | 'md' | 'lg',
    disabled?: boolean;
    imageAvailable?: boolean;
    withBadge?: boolean;
    avatarStatus?: 'active' | 'inactive'

}
export const Avatar = ({ variant, size, disabled, imageAvailable, withBadge, avatarStatus }: AvatarProps) => {
    const classNames = `avatar avatar-${variant} avatar-${size} ${disabled && 'avatar-disabled'} ${!imageAvailable && 'avatar-text'} `;
    const classNamesBadge = `badge badge-${avatarStatus} `
    return (

        <div className={classNames}>
            {imageAvailable ? <img src={avatarSVG} alt='' /> : 'AK'}
            {withBadge && <div className={classNamesBadge}></div>}
        </div>


    )
}