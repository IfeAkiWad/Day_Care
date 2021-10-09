import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        this.props.submitToddlers(this.state, this.props.daycare.id)
        this.setState({[event.target.name]: ''})
    }

    render() {
        console.log(this.props.daycare, "Day care id")
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <br />
                    {this.props.daycareId}
                    <h4>New Student</h4>
                    <label><u>Name</u>: </label>
                    <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} placeholder="First name, last name..." /><br />
                    <label><u>Birthday</u>: </label>
                    <input type="text" name="birthday" onChange={this.handleOnChange} value={this.state.birthday} placeholder="YYYY-MM-DD..." /><br />
                    <label><u>Emergency Contact</u>: </label>
                    <input type="text" name="emergencyContact" onChange={this.handleOnChange} value={this.state.contact} placeholder="First name, last name..." /><br />
                    <label><u>Phone</u>: </label>
                    <input type="text" name="phone" onChange={this.handleOnChange} value={this.state.phone} placeholder="##########" /><br />
                    <label><u>Allergy</u>: </label>
                    <input type="text" name="allergy" onChange={this.handleOnChange} value={this.state.allergy} placeholder="Allergy..." /><br /><br />
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

export default connect(null, { submitToddlers })(DaycareForm)
