import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import formFields from './formFields';
import SurveryField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {
  renderFields = () => {
    return formFields.map(({label, name}) => (
      <Field
        key={name}
        component={SurveryField}
        type="text"
        label={label}
        name={name}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" 
            className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit"
            className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({name}) => {
    if(!values[name]) {
      switch (name) {
        case 'body':
          errors[name] = `You must provide an email ${name}`;   
         return;
        case 'recipients':
          errors[name] = `You must provide a list of ${name}`;
          return;
        default:
          errors[name] = `You must provide a ${name}`;
      }
    }
  });
  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);
