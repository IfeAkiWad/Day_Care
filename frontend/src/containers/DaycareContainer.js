import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import { connect } from 'react-redux';
import Home from '../components/homecomp/Home';
import Daycare  from '../components/daycarecomp/Daycare';

class DaycareContainer extends Component {
    render() {
        console.log(this.props.sunnyDaycare, "Daycare Container")
        return (
            

            <div>
                <Welcome />
                {this.props.sunnyDaycare.map ( daycare => {
                    return <Home key={daycare.id} getDaycare={daycare} />
                })}
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

