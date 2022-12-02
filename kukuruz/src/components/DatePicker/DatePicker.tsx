import React, { HTMLAttributes } from 'react';
import './styles/DatePicker.scss';

export interface DatePickerProps extends HTMLAttributes<HTMLInputElement> { }

export const DatePicker = () => {
    const classNames = `date-input`;
    const today = new Date();
    console.log(today)
    return (
        <div className={classNames}>
            <label>Pick a date</label>

            <input
                type="date"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
            />
        </div>
    );
};
