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

//States of Checkboxes
export const StatesOfCheckboxed = () => (
    <div className='checkboxes-wrapper'>
        <Dropdown label='Pick one' options={optionsToMap} />
    </div>
)


