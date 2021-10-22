import React, { Component } from 'react'
import ToddlerContainer from '../../containers/ToddlerContainer'
import ToddlerList from '../toddlercomp/ToddlerList'

export default class Daycare extends Component {
    render() {

        return (
            <div id="table-list">
                {this.props.getDaycare.toddlers.map( toddler => {
                    return <ToddlerList key={toddler.id} toddlerDetail={toddler} />
                })}
                <ToddlerContainer getToddlers={this.props.getDaycare}/>
            </div>
        )
    }
}
