import React, { Component } from 'react'
// import DaycareListHead from './DaycareListHead'
import Daycare from './Daycare'


export default class DaycareList extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({value: event.target.value})
    }


    render() {
         // eslint-disable-next-line array-callback-return
         let filteredDaycare = this.props.getDaycares.filter( daycare => {
            if(this.state.value !== '') 
                {return daycare.name.toLowerCase().includes(this.state.value)
            }
        })

        return (
            <div>
                <h3>Daycare Directory</h3>
                <input type="text" value={this.state.value} onChange={this.handleOnChange} placeholder="filter Daycare..."  /><br /><br />
                {filteredDaycare.map( daycare => {
                    return <Daycare key={daycare.id} daycareDetail={daycare}/>
                })} 
            </div>
        )
    }
}












