import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Clock';
import Alarmclock from './Alarmclock';

function Alarm() {
  return (
    <div className='alarm'>
        <div className='row'>
                <div className='col-6' style={{margin: "auto"}}>
                    <Clock />
                </div>
                <div className='col-6' id='alarm-c'>
                    <Alarmclock />
                </div>
        </div>
    </div>
  );
}

export default Alarm;
