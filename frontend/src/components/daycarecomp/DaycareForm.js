import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitToddlers } from '../../actions/toddlerActions'

class DaycareForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            birthday: '',
            emergencyContact: '',
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
        this.setState({[event.target.name]: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <br />
                    <h4>New Student</h4>
                    <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} placeholder="Name..." /><br />
                    <input type="text" name="birthday" onChange={this.handleOnChange} value={this.state.birthday} placeholder="Birthday..." /><br />
                    <input type="text" name="emergencyContact" onChange={this.handleOnChange} value={this.state.emergencyContact} placeholder="Emergency Contact..." /><br />
                    <input type="text" name="phone" onChange={this.handleOnChange} value={this.state.phone} placeholder="Phone..." /><br />
                    <input type="text" name="allergy" onChange={this.handleOnChange} value={this.state.allergy} placeholder="Allergy..." /><br /><br />
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

export default connect(null, { submitToddlers })(DaycareForm)
