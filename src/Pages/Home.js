import React from 'react';
import Calendar from '../Calendar';
import To_Do from '../To-Do';
import Schedule from '../Schedule';
import Music from '../Music';
import Alarm from '../Alarm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";


function Home() {

  return (
    <>
      <body>
        <div className='container'>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
          <div className='row top'>
            <div className='col-lg-6'>
              <Calendar />
            </div>
            <div className='col-lg-3'>
              <To_Do />
            </div>
            <div className='col-lg-3'>
              <Schedule />
            </div>
          </div>
          <div className='row bottom'>
            <div className='col-lg-9'>
              <Alarm />
            </div>
            <div className='col-lg-3'>
              <Music />
            </div>
          </div>
        </div>
      </body>
     </>
  );
}

export default Home;
