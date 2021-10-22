import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteToddlers } from '../actions/toddlerActions'
import ToddlerFilter from '../components/toddlercomp/ToddlerFilter'

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
                <h4><u>Student Directory</u></h4>
                <input id="directory-input" onChange={this.handleOnChange} value={this.state.value} placeholder="Search Student..."/><br />
                </div>
                {filteredToddler.map( toddler => {
                    return <ToddlerFilter delete={this.props.deleteToddlers} key={toddler.id} toddler={toddler} toddlerId={toddler.id}/>
                })}
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         delete: (toddler) => dispatch({ type: "REMOVE_TODDLER", payload: toddler }),
//       };
// }

export default connect(null, { deleteToddlers })(ToddlerContainer)