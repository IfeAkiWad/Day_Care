import React, { Component } from 'react'
import Welcome from '../components/Welcome';
import { connect } from 'react-redux';
import Home from '../components/homecomp/Home';
import DaycareList  from '../components/daycarecomp/DaycareList';
// import DaycareForm from '../components/daycarecomp/DaycareForm';

class DaycareContainer extends Component {
    render() {
        console.log(this.props.allDaycares, "Daycare Container")
        let daycare = this.props.allDaycares
        return (
            

            <div>
                <Welcome />
                {this.props.allDaycares.map ( daycare => {
                    return <Home key={daycare.id} getDaycare={daycare} />
                })}
                <DaycareList getDaycares={this.props.allDaycares}/>
                {/* {daycare.map(d => {
                    <DaycareForm daycareId={d.id}/>
                })} */}
                
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

