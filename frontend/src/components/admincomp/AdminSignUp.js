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
                    <input id="form-input" type="text" name="name" onChange={this.handleOnChange} value={this.state.name} placeholder="First name, last name..." required /><br />

                </form>
                
            </div>
        )
    }
}
