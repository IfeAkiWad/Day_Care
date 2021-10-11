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
        let sunnyDayId = this.props.daycare.id = '1'
        let tatorTottsId = this.props.daycare.id = '2'
        this.props.submitToddlers(this.state, sunnyDayId, tatorTottsId)
        this.setState({
            name: '',
            birthday: '',
            contact: '',
            phone: '',
            allergy: ''
        })
    }

    render() {
        console.log(this.props.daycare, "Day care ID")
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <br />
                    <h4>New Student</h4>
                    <label><u>Name</u>: </label>
                    <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} placeholder="First name, last name..." required /><br />
                    <label><u>Birthday</u>: </label>
                    <input type="text" name="birthday" onChange={this.handleOnChange} value={this.state.birthday} placeholder="YYYY-MM-DD..." required /><br />
                    <label><u>Emergency Contact</u>: </label>
                    <input type="text" name="contact" onChange={this.handleOnChange} value={this.state.contact} placeholder="First name, last name..." required /><br />
                    <label><u>Phone</u>: </label>
                    <input type="text" name="phone" onChange={this.handleOnChange} value={this.state.phone} placeholder="##########" required /><br />
                    <label><u>Allergy</u>: </label>
                    <input type="text" name="allergy" onChange={this.handleOnChange} value={this.state.allergy} placeholder="Allergy..." required /><br /><br />
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

export default connect( null, { submitToddlers })(DaycareForm)
