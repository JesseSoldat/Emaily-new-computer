import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
  auth: () => ({}),
  form: reduxForm,
  surveys: () => ({})
});