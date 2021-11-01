import React, { Component } from 'react'

// THIS COMPONENT IS RENDERING THE INDEX OF THE AVAILABLE TODDLERS

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
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{toddler.name}</td>
                            </tr>
                        </tbody>
                </table>
            </div>
        )
    }
}
