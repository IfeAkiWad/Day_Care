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
        // let compareId = if ()
        debugger
        this.props.submitToddlers(this.state, this.props.daycare.id)
        // debugger
        this.setState({[event.target.name]: ''})
    }

    render() {
        console.log(this.props.daycare, "Day care id")
        console.log(this.props.getToddlers, "daycare_id")
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <br />
                    {this.props.daycare.id}
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
                    <select name="daycare" id="daycare" required>
                        <option name="daycare_id">Select Daycare</option>
                        <option name="daycare_id" value={this.props.daycare.id}>Sunny Day Care</option>
                        <option name="daycare_id" value={this.props.daycare.id}>Tator Totts Academy</option>                   
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
        getToddlers: state.toddlers,
        loading: state.loading
   }
}

export default connect(mapStateToProps, { submitToddlers })(DaycareForm)
