import React, { Component } from 'react'
import ToddlerContainer from '../../containers/ToddlerContainer'
import ToddlerList from '../toddlercomp/ToddlerList'

export default class Daycare extends Component {
    render() {
        const daycare = this.props.daycareDetail

        return (
            <div>
                {daycare.name}
                {daycare.toddlers.map( toddler => {
                    return <ToddlerList key={toddler.id} toddlerDetail={toddler} />
                })}
                <ToddlerContainer getToddlers={this.props.daycareDetail}/>
            </div>
        )
    }
}
