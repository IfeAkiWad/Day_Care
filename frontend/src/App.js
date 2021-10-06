import React, { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { fetchDaycares } from './actions/daycareActions';
import { fetchToddlers } from './actions/toddlerActions';
import DaycareContainer from './containers/DaycareContainer';

class App extends Component {
  componentDidMount() {
    this.props.fetchDaycares()
    this.props.fetchToddlers()
  }

  render() {
    return (
      <div>
        App.js
        <DaycareContainer />
      </div>
    )
  }
}

export default connect(null, { fetchDaycares, fetchToddlers })(App)

