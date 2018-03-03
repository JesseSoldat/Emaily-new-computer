import React, { Component } from 'react';
import { connect } from 'react-redux';

class SurveyList extends Component {

  renderSurveys = () => {
    return (<div>SurveyList</div>);
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    )
  }
}

const mapStateToProps = ({surveys}) => ({
  surveys
});

export default connect(mapStateToProps)(SurveyList);