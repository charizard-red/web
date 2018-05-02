import React from "react";

import BodyMain from "./BodyMain";
import {Container} from 'reactstrap'


const PageControl = props => {
  return (
    <div>
      <Container>
        <BodyMain />

        {props.children}
        {/*Any Web Page*/}
        {/*Any Web Page*/}
      </Container>


    </div>
  );
};

export default PageControl;
