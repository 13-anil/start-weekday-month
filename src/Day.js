import React from 'react';
import Month from './Month';

/*const day = () => { */

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const year = 2019;

    function getDay(month, year) {
        const date = new Date();
        date.setFullYear(year);
        date.setMonth(month);
        date.setDate(1);

        const day = date.getDay();
        return days[day];
    }

    export default (props) => {
        return (
        <div>
             starts {getDay(props.month, props.year)}
        </div>)
    }

    /*return (
        <div>
            starts {getDay}
        </div>
    )


}
export default day; */