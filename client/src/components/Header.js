import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="left brand-logo"
            to='/'
          >
            Emaily
          </Link>
        </div>
      </nav>
    );
  }
}

export default connect(null)(Header);