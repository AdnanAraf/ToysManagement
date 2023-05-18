import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home2 from "../Home2/Home2";
import Home1 from "../Home1/Home1";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
    children: [
      {
        path: "/",
        element: <Home2 />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default Routes;
