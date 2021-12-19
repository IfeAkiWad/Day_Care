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
                Hey! Can you see me?
                <form id="form" onSubmit={this.handleOnSubmit}><br />
                <h4>Please Log In</h4>
                    <label><u>Admin ID</u>: </label>
                    <input id="form-input" type="text" name="username" onChange={this.handleOnChange} value={this.state.username} placeholder="Admin ID..." required /><br />
                    <label><u>Admin Password</u>: </label>
                    <input id="form-input" type="password" name="password" onChange={this.handleOnChange} value={this.state.password} placeholder="Admin password..." required /><br /><br />
                    <input id="form-submit" type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}
