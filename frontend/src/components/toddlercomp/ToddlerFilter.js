import React, { Component } from 'react'
// import Toddler from './Toddler'
// import { connect } from 'react-redux'

class ToddlerFilter extends Component {
    render() {
        console.log(this.props.toddler, "Toddler Filter")
        let toddler = this.props.toddler
        return (
            <div>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Emergency Contact</th>
                            <th>Phone</th>
                            <th>Allergy</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{toddler.name}</td>
                                <td>{toddler.birthday}</td>
                                <td>{toddler.emergency_contact}</td>
                                <td>{toddler.phone}</td>
                                <td>{toddler.allergy}</td>
                            </tr>
                            <button onClick={() => this.props.delete(this.props.toddler)}>Delete</button>
                        </tbody>
                </table>
                {/* <Toddler toddlerShow={this.props.toddler}/> */}
            </div>
        )
    }
}



export default ToddlerFilter