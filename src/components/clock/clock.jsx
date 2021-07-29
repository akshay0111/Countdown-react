import React, { Component } from 'react'
import './clock.css'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

    }
    componentWillMount() {
        this.timeUntil(this.props.deadLine)
    }
    componentDidMount() {
        setInterval(() => this.timeUntil(this.props.deadLine),1000);
        
    }


    timeUntil(deadLine) {
        const time = Date.parse(deadLine) - Date.parse(new Date());
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor(
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds })
    }

    render() {

        return (
            <div>
                <div className="day">
                    {this.state.days} Days
                </div>
                <div className="hour">
                    {this.state.hours} Hours
                </div>
                <div className="minute">
                    {this.state.minutes} minutes
                </div>
                <div className="seconds">
                    {this.state.seconds} seconds
                </div>
            </div>
        )
    }
}
