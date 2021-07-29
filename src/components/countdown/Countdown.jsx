import React, { Component } from 'react'
import Clock from '../clock/clock'
import './Countdown.css'


export default class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deadLine: 'November 15,2022',
            newDate: ''
        }
    }
    oldDeadLine = (e) => {
        this.setState({ deadLine: this.state.newDate })
    }
    newDeadLine = (e) => {
        this.setState({ newDate: e.target.value })
    }
    render() {
        return (
            <div>
                <div className="main-body">
                    <div className="title">
                        Countdown To <br />
                        {this.state.deadLine}
                    </div>
                    <Clock deadLine={this.state.deadLine} />

                    <div className="input">
                        <input placeholder='new date' onChange={this.newDeadLine} />
                        <button onClick={this.oldDeadLine}>Submit</button>
                    </div>

                </div>
            </div>
        )
    }
}
