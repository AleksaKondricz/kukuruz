import React from 'react'
import avatarSVG from '../../static/svg/avatar-girl.svg';

export interface AvatarProps {
    variant: 'round' | 'square',
    size: 'sm' | 'md' | 'lg',

}
export const Avatar = ({ variant, size }: AvatarProps) => {
    const classNames = `avatar avatar-${variant} avatar-${size} `;
    return (
        <div className={classNames}>
            <img src={avatarSVG} alt='' />
        </div>
    )
}