import React from 'react'
import avatarSVG from '../../static/jpg/avatar-portrait.jpg';
import './styles/Avatar.scss';

export interface AvatarProps {
    variant: 'round' | 'square',
    size: 'sm' | 'md' | 'lg',
    disabled?: boolean;

}
export const Avatar = ({ variant, size, disabled }: AvatarProps) => {
    const classNames = `avatar avatar-${variant} avatar-${size} avatar-${disabled}`;
    return (
        <div className={classNames}>
            <img src={avatarSVG} alt='' />
        </div>
    )
}