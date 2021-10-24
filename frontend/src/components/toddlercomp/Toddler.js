import React, { Component } from 'react'

export default class Toddler extends Component {
    render() {
        console.log(this.props.toddlerShow, this.props.toddlerId, "Toddler")
        let toddler = this.props.toddlerShow

        const handleOnDelete = (toddler) => {
            this.props.delete(toddler)
            
        }

        return (
            <div>
                {/* <h1>Toddler component</h1> */}
                <h1><u>{toddler.name}'s profile</u></h1>
                <table>
                    <thead>
                        <tr>
                            <th>Birthday</th>
                            <th>Emergency Contact</th>
                            <th>Phone</th>
                            <th>Allergy</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{toddler.birthday}</td>
                                <td>{toddler.contact}</td>
                                <td>{toddler.phone}</td>
                                <td>{toddler.allergy}</td>
                            </tr>
                        </tbody>
                </table>
                <div id="button">               
                    <button onClick={()=>handleOnDelete(toddler)}>Delete</button>
                </div>
            </div>
        )
    }
}
