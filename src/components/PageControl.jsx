import React from "react";

import Header from "./Header";

const PageControl = props => {
  return (
    <div>
      <Header />
      {props.children}
      {/* AliApp */}
      {/* TableOne */}

    </div>
  );
};

export default PageControl;
