import React from 'react';
import Calendar from 'react-calendar';

const MyCalendar = props => {

    return (
        <div>
            <Calendar
                onChange={props.onChange}
                value={props.date}
            />
        </div>
    );
}
 
export default MyCalendar;