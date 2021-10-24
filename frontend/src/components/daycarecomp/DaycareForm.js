import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { submitToddlers } from '../../actions/toddlerActions'

class DaycareForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            birthday: '',
            contact: '',
            phone: '',
            allergy: ''
        }

    }

    handleOnChange = (event) => {
        console.log(event.target.value, "Daycare Form: handle on change")
        this.setState({[event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.submitToddlers(this.state, this.props.daycareId)
        this.setState({
            name: '',
            birthday: '',
            contact: '',
            phone: '',
            allergy: ''
        })
        alert("Successfully submitted new student")
        this.props.history.push('/toddlers')

    }

    render() {
        console.log(this.props.daycareId)
        console.log(this.props.toddler)
        
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} id="form">
                    <br />
                    <h4>New Student Form</h4>
                    <p>Please fill out the form below:</p>
                    <label><u>Name</u>: </label>
                    <input id="form-input" type="text" name="name" onChange={this.handleOnChange} value={this.state.name} placeholder="First name, last name..." required /><br />
                    <label><u>Birthday</u>: </label>
                    <input id="form-input" type="text" name="birthday" onChange={this.handleOnChange} value={this.state.birthday} placeholder="YYYY-MM-DD..." required /><br />
                    <label><u>Emergency Contact</u>: </label>
                    <input id="form-input" type="text" name="contact" onChange={this.handleOnChange} value={this.state.contact} placeholder="First name, last name..." required /><br />
                    <label><u>Phone</u>: </label>
                    <input id="form-input" type="text" name="phone" onChange={this.handleOnChange} value={this.state.phone} placeholder="##########" required /><br />
                    <label><u>Allergy</u>: </label>
                    <input id="form-input" type="text" name="allergy" onChange={this.handleOnChange} value={this.state.allergy} placeholder="Allergy..." required /><br /><br />
                    <input id="form-submit" type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

export default withRouter(connect( null, { submitToddlers })(DaycareForm))
