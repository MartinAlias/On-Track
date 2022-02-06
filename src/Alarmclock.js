import React from 'react';


class AlarmClock extends React.Component {
    constructor() {
      super();
      this.state = {
        currentTime: '',
        alarmTime: ''
      };
      this.setAlarmTime = this.setAlarmTime.bind(this);
    }
  
    componentDidMount(){
      this.clock = setInterval(
        () => this.setCurrentTime(),
        1000
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      1000)
    }
  
    componentWillUnmount(){
      clearInterval(this.clock);
      clearInterval(this.interval);
    }
  
    setCurrentTime(){
      this.setState({
        currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
    }
  
    setAlarmTime(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }
  
    checkAlarmClock(){
      if(this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
        this.alarmMessage = "Set Alarm";
      } else {
        this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ".";
        if(this.state.currentTime === this.state.alarmTime) {
          alert("Time for bed.");
        }
      }   
    }
  
    render() {
      return (
        <div>
          <h2>Sleep Reminder</h2>
          <h3>{this.alarmMessage}
          </h3>
          <form>
            <input type="time" onChange={this.setAlarmTime}></input>
          </form>
        </div>
      );
    }
  }



function Alarmclock() {
        return <AlarmClock />;
}

export default Alarmclock;
