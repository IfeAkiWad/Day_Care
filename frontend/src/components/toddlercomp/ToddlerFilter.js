import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { deleteToddlers } from '../../actions/toddlerActions'

class ToddlerFilter extends Component {
   


    render() {
        console.log(this.props.toddler, "Toddler Filter")
        let toddler = this.props.toddler
        const handleDelete = () => {
            this.props.delete(toddler.id)
        }
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
                                <td>{toddler.contact}</td>
                                <td>{toddler.phone}</td>
                                <td>{toddler.allergy}</td>
                            </tr>
                        </tbody>
                </table>
                <button onClick={() => handleDelete(toddler.id)}>Delete</button>
            </div>
        )
    }
}



export default ToddlerFilter