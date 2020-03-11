import React from 'react';
import Day from './Day';

/*const month = () => {

const months = [
   { name: "January"},
   { name: "February"},
   { name: "March"},
   { name: "April"},
   { name: "May"},
   { name: "June"},
   { name: "July"},
   { name: "August"},
   { name: "September"},
   { name: "October"},
   { name: "November"},
   { name: "December"}
];

const year = 2019;

let monthOptions = [];
for (const [index, value] of months.entries()) {
monthOptions.push(<option key={index}> {value.name} </option>);
}


    return(
        <div>
            <select name="month"> {monthOptions} </select>
            <Day />
        </div>
    );
}
export default month;
*/

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const year = 2019;

export default class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {month: 0};
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({month: e.target.value});
    };

    render() {
        const monthOptions = months.map((m, i) => (
            <option value= {i} key= {i}> {m} </option>
        ));

        return (
            <div> 
                <p> {year} 
                <select onChange = {this.onChange} name= "month">
                    {monthOptions}
                </select>
                <Day month= {this.state.month} year= {year} />
                </p>
            </div>
        );
    }
}