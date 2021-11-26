import React, { Component } from 'react'

// THIS COMPONENT IS RENDERING THE INDEX OF THE AVAILABLE TODDLERS

export default class ToddlerTableRow extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    likeIncrement = () => {
        let number = parseInt(this.props.inc, 10)
        let newCount = this.state.count + number
        this.setState({
            count: newCount
        })
    }

    render() {
        const toddler = this.props.toddlerDetail
        console.log(toddler)
        return (
            <div id="table-list">
                
                <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                        <button onClick={this.likeIncrement}>Like {this.state.count}</button>
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
