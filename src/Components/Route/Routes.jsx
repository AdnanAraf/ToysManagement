import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home2 from "../Home2/Home2";
import Home1 from "../Home1/Home1";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import AllToys from "../AllToys/AllToys";
import MyToys from "../MyToys/MyToys";
import AddToys from "../AddToys/AddToys";
import PrivateRoute from "../Private/PrivateRoute";
import UpdateToy from "../UpdateToy/UpdateToy";

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
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "All Toys",
        element: <AllToys />,
      },
      {
        path: "My Toys",

        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "UpdateToy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/ToysData/${params.id}`),
      },
      {
        path: "Add a Toy",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default Routes;
