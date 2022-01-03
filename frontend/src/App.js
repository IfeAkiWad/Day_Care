import React, { Component } from 'react'
import './App.css';

import { connect } from 'react-redux'
import { fetchDaycares } from './actions/daycareActions';
import { fetchToddlers } from './actions/toddlerActions';
import { fetchAdmins } from './actions/adminActions';
import NavBar from './components/navcomp/NavBar';
import Welcome from './components/Welcome'
import DaycareFormContainer from './containers/DaycareFormContainer';
import DaycareContainer from './containers/DaycareContainer';
import ImageGallery from './components/ImageGallery';
import AdminLogIn from './components/admincomp/AdminLogIn'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// seeing if this commit will be reflected
class App extends Component {
  componentDidMount() {
    this.props.fetchDaycares()
    this.props.fetchToddlers()
    this.props.fetchAdmins()
  }
  
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={AdminLogIn}/>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/daycares/toddlers/new" component={DaycareFormContainer}/>
          <Route exact path="/toddlers" component={DaycareContainer}/>
          <Route exact path="/gallery" component={ImageGallery}/>
        </Switch>
      </Router>
    )
  } 
}

// export default App
export default connect(null, { fetchDaycares, fetchToddlers, fetchAdmins })(App)

