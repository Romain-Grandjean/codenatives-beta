import React, { Component } from 'react'

export default class Timerquestion extends Component {
    state = {
        millisecs: 0,
        seconds: 20,
        questions: 0
    }

    componentDidMount() {
       
            this.myInterval = setInterval(() => {
                const { millisecs, seconds } = this.state;

                if (millisecs> 0) {
                    this.setState(({ millisecs }) => ({
                        millisecs: millisecs - 1
                    }))
                }
                if (millisecs === 0) {
                    if (seconds === 0) {
                        this.setState(({ seconds }) => ({
                            seconds: 20,
                        }))
                    } else {
                        this.setState(({ seconds }) => ({
                            seconds: seconds - 1,
                            millisecs: 99
                        }))
                    }
                } 
            }, 10)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { millisecs, seconds } = this.state
        return (
            <div>
                {seconds + "." + millisecs}
            </div>
        )
        }

}