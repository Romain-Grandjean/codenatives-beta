import React, { Component } from 'react'

export default class Timerquestion extends Component {
    state = {
        millisecs: 0,
        seconds: 10,
        questions: 0
    }

    componentDidMount() {
                this.myInterval = setInterval(() => {
                const { millisecs, seconds, questions } = this.state;

                if (millisecs> 0) {
                    this.setState(({ millisecs }) => ({
                        millisecs: millisecs - 1
                    }))
                }
                if (millisecs === 0) {
                    if (seconds === 0 && questions === 19) {
                        clearInterval(this.myInterval)
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