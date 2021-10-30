import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDaycares } from '../../actions/daycareActions';
import { fetchToddlers } from '../../actions/toddlerActions';

//THIS COMPONENT RENDERS AND HANDLES THE INDIVIDUAL TODDLER PROFILE

class Toddler extends Component {
    render() {
        console.log(this.props.toddlerShow, this.props.toddlerId, "Toddler")
        let toddler = this.props.toddlerShow

        const handleOnDelete = async (toddlerId) => {
            await this.props.delete(toddlerId)
            this.props.fetchDaycares();
            this.props.fetchToddlers();
        }

        return (
            <div key={toddler.id} value={toddler.id}>
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
                <div id="button" value={toddler.id}>               
                    <button onClick={()=>handleOnDelete(toddler.id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default  connect(null, { fetchDaycares, fetchToddlers })(Toddler)

