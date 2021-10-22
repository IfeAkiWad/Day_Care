import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { deleteToddlers } from '../../actions/toddlerActions'

class ToddlerFilter extends Component {
   


    render() {
        console.log(this.props.toddler, "Toddler Filter")
        console.log(this.props.toddlerId, "Toddler Filter")

        let toddler = this.props.toddler
        let toddlerId = this.props.toddlerId
        const handleDelete = (toddler) => {
            this.props.delete(toddler)
        }
        return (
            <div id="Toddler-filter">
                <br />
                <table id={toddlerId} class="table">
                    <thead>
                        <tr id={toddlerId}>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Emergency Contact</th>
                            <th>Phone</th>
                            <th>Allergy</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr id={toddlerId}>
                                <td>{toddler.name}</td>
                                <td>{toddler.birthday}</td>
                                <td>{toddler.contact}</td>
                                <td>{toddler.phone}</td>
                                <td>{toddler.allergy}</td>
                            </tr>
                        </tbody>
                </table>
                <div id="button">               
                    <button onClick={() => handleDelete(toddler.id)}>Delete</button>
                </div>
                
            </div>
        )
    }
}



export default ToddlerFilter