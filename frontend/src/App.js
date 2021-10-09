import React, { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { fetchDaycares } from './actions/daycareActions';
import { fetchToddlers } from './actions/toddlerActions';
import DaycareContainer from './containers/DaycareContainer';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    this.props.fetchDaycares()
    this.props.fetchToddlers()
  }
  
  render() {
    // console.log(this.props)
    return (
      <div>
        <DaycareContainer />
      </div>
    )
  }

  
}

export default connect(null, { fetchDaycares, fetchToddlers })(App)

