//functional component(wrapper)

import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";

import LeftMenu from "../layout/LeftMenu";

export default function Dashboard() {
  return (
    <Fragment>
      <LeftMenu />
    </Fragment>
  );
}
