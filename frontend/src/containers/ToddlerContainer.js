import React, { Component } from 'react'
import { connect } from 'react-redux'
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
            <div>
                <br />
                <h4>Student Directory</h4>
                <input onChange={this.handleOnChange} value={this.state.value} placeholder="Search Student..."/>
                {filteredToddler.map( toddler => {
                    return <ToddlerFilter delete={this.props.delete} key={toddler.id} toddler={toddler} />
                })}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     // console.log(state)
//     return {
//         allDaycares: state.daycareReducer.daycares,
//         loading: state.loading
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (toddler) => dispatch({ type: "REMOVE_TODO", payload: toddler }),
      };
}

export default connect(null, mapDispatchToProps)(ToddlerContainer)