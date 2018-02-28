import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent = () => {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default: 
        return [
          <li key="1">Payments</li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    const {auth} = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="left brand-logo"
            to={auth ? '/surveys': '/'}
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({auth}) => ({
  auth
});

export default connect(mapStateToProps)(Header);