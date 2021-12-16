import React, { Component } from 'react'

export default class AdminSignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input id="form-input" type="text" name="username" onChange={this.handleOnChange} value={this.state.username} placeholder="Admin ID..." required /><br />
                    <input id="form-input" type="text" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Admin password..." required /><br />

                </form>
                
            </div>
        )
    }
}
