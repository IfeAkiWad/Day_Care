import React, { Component } from 'react'

export default class ToddlerList extends Component {
    render() {
        console.log(this.props, "ToddlerList")
        const toddler = this.props.toddlerDetail
        
        return (
            <div id="table-list">
                <br />
                <table class="table">
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
            </div>
        )
    }
}
