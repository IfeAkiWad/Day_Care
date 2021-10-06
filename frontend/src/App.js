import React, { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { fetchDaycares } from './actions/daycareActions';
import { fetchToddlers } from './actions/toddlerActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchDaycares()
    this.props.fetchToddlers()
  }

  render() {
    return (
      <div>
        App.js
      </div>
    )
  }
}

export default connect(null, { fetchDaycares, fetchToddlers })(App)

