import React, { Component } from 'react'
import { connect } from 'react-redux';
import Daycare  from '../components/daycarecomp/Daycare';
import { fetchDaycares } from '../actions/daycareActions';
import { fetchToddlers } from '../actions/toddlerActions';

class DaycareContainer extends Component {
    componentDidMount() {
        this.props.fetchDaycares()
        this.props.fetchToddlers()
    }
      
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

export default connect(mapStateToProps, { fetchDaycares, fetchToddlers })(DaycareContainer)

