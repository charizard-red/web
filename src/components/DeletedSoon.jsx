import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageSignUp from './PageSignup'

const SignUpGoogle = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/makeappointment`}>{PageSignup}</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default SignUpGoogle;
