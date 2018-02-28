import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surverys" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null)(App);