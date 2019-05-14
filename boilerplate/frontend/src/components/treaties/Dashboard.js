//functional component(wrapper)

import React, { Fragment } from "react";

import LeftMenu from "../layout/LeftMenu";

export default function Dashboard() {
  return (
    <Fragment>
      <LeftMenu />
    </Fragment>
  );
}
