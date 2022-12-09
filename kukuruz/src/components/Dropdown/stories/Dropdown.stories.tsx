import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Dropdown, DropdownProps } from '../Dropdown';
import '../styles/Dropdown.scss';

//meta data with the type Meta for our Dropdown component;
const meta: Meta = {
    title: 'Dropdown',
    component: Dropdown,
    argTypes: {

        children: {
            defaultValue: 'Default Dropdown'
        }
    }
}

export default meta;




const optionsToMap = [{ value: 'pick one', option: 'first option' }, { value: 'second option', option: 'second option' }, { value: 'third option', option: 'third option' }];

//States of Dropdown
export const StatesOfDropdowns = () => (
    <div className='dropdowns-wrapper'>
        <Dropdown label='Pick one' options={optionsToMap} />
        <Dropdown label='Pick one' options={optionsToMap} disabled/>
    </div>
)

//Sizes of Dropdown
export const SizesOfDropdowns = () => (
    <div className='dropdowns-wrapper'>
        <Dropdown label='Pick one' options={optionsToMap} size='sm'/>
        <Dropdown label='Pick one' options={optionsToMap} size='md'/>
        <Dropdown label='Pick one' options={optionsToMap} size='lg'/>
    </div>
)

//Varaiants of Dropdown
export const VariantsOfDropdowns = () => (
    <div className='dropdowns-wrapper'>
        <Dropdown label='Pick one' options={optionsToMap} size='md' variant='subtle'/>
        <Dropdown label='Pick one' options={optionsToMap} size='md'variant='outline'/>
     
    </div>
)

