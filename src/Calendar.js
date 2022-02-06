import React, {useState, useEffect} from 'react';
import moment from 'moment';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Calendar() {
  
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());


    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    
    
    function isSelected(day, value) {
        return value.isSame(day, "day");
    }

    function beforeToday(day) {
        return day.isBefore(new Date(), "day");
    }

    function isToday(day) {
        return day.isSame(new Date(), "day");
    }

    function dayStyles(day, value) {
        if (beforeToday(day)) return "before";
        if (isSelected(day, value)) return "selected";
        if (isToday(day)) return "today";
        return "";
    }


    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
        const a = [];

        while(day.isBefore(endDay, "day")) {
            a.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, "day").clone())
            );
        }
        setCalendar(a);
    }, [value])


    function currMonthName() {
        return value.format("MMMM");
    }

    function currYear() {
        return value.format("YYYY");
    }

    function prevMonth() {
        return value.clone().subtract(1, "month");
    }

    function nextMonth() {
        return value.clone().add(1, "month");
    }

    return (
        <div className='calendar'>
            <div className='container'>
                <div className='row header'>
                            <div className='col previous'
                                onClick={() => setValue(prevMonth())}
                                >{String.fromCharCode(171)}</div>
                            <div className='col current'>{currMonthName()} {currYear()}</div>
                            <div className='col next'
                                onClick={() => setValue(nextMonth())}
                                >{String.fromCharCode(187)}</div>
                    </div>
                <div className=''>
                    <div className='body'>
                        {calendar.map((week) => (
                            <div>
                                {week.map((day) => (
                                    <div className='day' onClick={() => setValue(day)}>
                                    <div className={dayStyles(day, value)}>
                                        {day.format("D").toString()}
                                        <div>
                                            {/*Logic for stuff on that day*/}
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
