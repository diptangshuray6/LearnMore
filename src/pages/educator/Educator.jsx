import React from "react";
import { Outlet } from "react-router";

const Educator = () => {
  return (
    <div>
      Educator Page
      {<Outlet />}
    </div>
  );
};

export default Educator;
