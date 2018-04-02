import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui/Card';

import './LogIn.css';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <TextField id="loginEmail" hintText="Password Field" floatingLabelText="Enter Email" type="password"/>
        <br/>
        <TextField id="loginPassword" hintText="Password Field" floatingLabelText="Enter Password" type="password"/>
      </Card>
    );
  }
}

LogIn.propTypes = {};
