import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SignUpGoogle = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/appointment`}>Sign Up</Link>
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
