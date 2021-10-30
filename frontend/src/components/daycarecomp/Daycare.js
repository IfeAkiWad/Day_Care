import React, { Component } from 'react'
import ToddlerContainer from '../../containers/ToddlerContainer'
import ToddlerList from '../toddlercomp/ToddlerList'

class Daycare extends Component {
    render() { 
       
        return (
            <div id="table-list">
                    {/* eslint-disable-next-line array-callback-return*/}
                    {this.props.getDaycare.toddlers.map( toddler => { //Passing props containing an array of toddlers and  their info
                        return <ToddlerList key={toddler.id} toddlerDetail={toddler} />
                    })}
                     
                     {/* passing props of the whole daycare object */}
                <ToddlerContainer getToddlers={this.props.getDaycare}/> 
            </div>
        )
    }
}

export default Daycare 
