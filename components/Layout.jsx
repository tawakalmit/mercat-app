import React from "react";

import NavBack from "./NavBack";

function Layout(props) {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
      <NavBack />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
