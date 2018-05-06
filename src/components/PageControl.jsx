import React from "react";
import { Container } from "reactstrap";

import BodyMain from "./BodyMain";

const PageControl = props => {
  return (
    <Container>
      <BodyMain />

      {props.children}
    </Container>
  );
};

export default PageControl;
