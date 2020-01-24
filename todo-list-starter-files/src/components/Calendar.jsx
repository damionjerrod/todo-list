import React from 'react';
import Calendar from 'react-calendar';

const MyCalendar = props => {
    console.log(props.point);
    console.log();

    return (
        <div>
            <Calendar
                onChange={props.onChange, props.onDateSelect}
                value={props.date}
            />
        </div>
    );
}
 
export default MyCalendar;