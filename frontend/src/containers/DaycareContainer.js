import React, { Component } from 'react'
import { connect } from 'react-redux';
import Daycare  from '../components/daycarecomp/Daycare';

class DaycareContainer extends Component {
    render() {
        console.log(this.props.sunnyDaycare, "Daycare Container")
        return (
            

            <div>
                 {this.props.sunnyDaycare.map ( daycare => {
                    return <Daycare key={daycare.id} getDaycare={daycare} />
                })}   
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sunnyDaycare: state.daycareReducer.daycares,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(DaycareContainer)

