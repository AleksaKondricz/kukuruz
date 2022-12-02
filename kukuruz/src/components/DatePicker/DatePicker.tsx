import React, { HTMLAttributes } from 'react';
import './styles/DatePicker.scss';
import { currentDate, lastDate } from '../../services/getTodayDate';

export interface DatePickerProps extends HTMLAttributes<HTMLInputElement> {
    size?: 'sm' | 'md' | 'lg';
}

export const DatePicker = ({size}: DatePickerProps) => {
    const classNames = `date-picker date-picker-${size}`;

    return (
        <div className={classNames}>
            <label>Pick a date</label>

            <input
                type="date"
                name="trip-start"

                min={currentDate}
                max={lastDate}
            />
        </div>
    );
};
