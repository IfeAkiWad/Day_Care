import React, { Component } from 'react'
import ToddlerContainer from '../../containers/ToddlerContainer'
import ToddlerList from '../toddlercomp/ToddlerList'
import { deleteToddlers } from '../../actions/toddlerActions'
import { connect } from 'react-redux'

class Daycare extends Component {
    render() { 
       
        return (
            <div id="table-list">
                    {/* eslint-disable-next-line array-callback-return*/}
                    {this.props.getDaycare.toddlers.map( toddler => {
                        return <ToddlerList key={toddler.id} toddlerDetail={toddler} />
                    })}
                     
                <ToddlerContainer getToddlers={this.props.getDaycare}/>
            </div>
        )
    }
}

export default connect(null, { deleteToddlers })(Daycare)
