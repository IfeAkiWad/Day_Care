import React, { Component } from 'react'

import { connect } from 'react-redux';
import Home from '../components/homecomp/Home';
import { DaycareList } from '../components/daycarecomp/DaycareList';

class DaycareContainer extends Component {
    render() {
        return (
            <div>
                <Home daycares={this.props.daycares} />
                <DaycareList daycares={this.props.daycares} />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        daycares: state.daycares,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(DaycareContainer)

