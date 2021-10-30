import React, { Component } from 'react'
import Toddler from './Toddler'
import { connect } from 'react-redux'
import { deleteToddlers } from '../../actions/toddlerActions'

// THIS COMPONENT IS RENDERING THE FILTERED TODDLER(S)

class ToddlerFilter extends Component {
   


    render() {
        let toddler = this.props.toddler
        let toddlerId = this.props.toddlerId
       
        return (
            <div id="Toddler-filter">
                <br /> 
                <table data-id={toddlerId} class="table">
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
                <Toddler delete={this.props.deleteToddlers} toddlerShow={this.props.toddler} toddlerId={this.props.toddlerId} />
               
                
            </div>
        )
    }
}



export default connect(null, { deleteToddlers })(ToddlerFilter)