import React from 'react';
import Calendar from 'react-calendar';

const MyCalendar = props => {
    console.log(props.onClickDay);
    console.log(props.date.getDay());

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