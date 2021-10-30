import React, { Component } from 'react'
import ToddlerFilter from '../components/toddlercomp/ToddlerFilter'

// this container contains and handles the data for the toddler filter

class ToddlerContainer extends Component {
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
        console.log(this.props.getToddlers.toddlers, "Toddler Container")
        let daycareToddlers = this.props.getToddlers.toddlers
        // eslint-disable-next-line array-callback-return
        let filteredToddler = daycareToddlers.filter( toddler => {
            if(this.state.value !== '') 
                {return toddler.name.toLowerCase().includes(this.state.value)
            }
        })
        return (
            <div id="toddler-filter">
                <br />
                <div id="directory">
                <fieldset>
                    <h4><u>Student Directory</u></h4>
                    <input id="directory-input" onChange={this.handleOnChange} value={this.state.value} placeholder="Search Student..."/><br />
                    {filteredToddler.map( toddler => {
                    return <ToddlerFilter  key={toddler.id} toddler={toddler} toddlerId={toddler.id}/>
                })}
                </fieldset>
                </div>
                
            </div>
        )
    }
}

export default ToddlerContainer