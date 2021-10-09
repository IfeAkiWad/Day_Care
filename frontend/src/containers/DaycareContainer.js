import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import { connect } from 'react-redux';
import Home from '../components/homecomp/Home';
import DaycareList  from '../components/daycarecomp/DaycareList';

class DaycareContainer extends Component {
    render() {
        console.log(this.props.allDaycares, "Daycare Container")
        return (
            

            <div>
                <Welcome />
                {this.props.allDaycares.map ( daycare => {
                    return <Home key={daycare.id} getDaycare={daycare} />
                })}
                <DaycareList getDaycares={this.props.allDaycares}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state)
    return {
        allDaycares: state.daycareReducer.daycares,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(DaycareContainer)

