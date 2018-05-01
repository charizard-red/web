import React from "react";

import Header from "./Header";
import {Container} from 'reactstrap'

const PageControl = props => {
  return (
    <div>
      <Container>
        <Header />
        {props.children}
        {/*Any Web Page*/}
        {/*Any Web Page*/}
      </Container>


    </div>
  );
};

export default PageControl;
