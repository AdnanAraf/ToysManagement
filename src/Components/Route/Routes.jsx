import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home2 from "../Home2/Home2";
import Home1 from "../Home1/Home1";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
    children: [
      {
        path: "/",
        element: <Home2 />,
      },
    ],
  },
]);
export default Routes;
