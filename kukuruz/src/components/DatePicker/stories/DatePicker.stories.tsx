import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DatePicker, DatePickerProps } from '../DatePicker';
import '../styles/DatePicker.scss';

//meta data with the type Meta for our button component;
const meta: Meta = {
    title: 'DatePicker',
    component: DatePicker,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Default datepicker'
        }
    }
}

export default meta;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />


//Playground DatePicker
export const PlaygroundDatePicker = Template.bind({})

//Sizes of Date Picker
export const SizesOfDatePicker = () => (
    <div className='date-picker-wrapper'>
        <DatePicker size='sm' />
        <DatePicker size='md' />
        <DatePicker size='lg' />

    </div>
)


