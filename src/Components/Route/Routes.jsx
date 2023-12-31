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
import SingleToysDetails from "../SingleToysDetails/SingleToysDetails";
import ShopCategoryDetails from "../ShopcategoryDetails/ShopCategoryDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home2 />,
      },
      {
        path: "home",
        element: <Home />,
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
          fetch(
            `https://toys-server-adnanaraf.vercel.app/ToysData/${params.id}`
          ),
      },
      {
        path: "Add a Toy",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/singletoys/:id",
        element: (
          <PrivateRoute>
            <SingleToysDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-adnanaraf.vercel.app/ToysData/${params.id}`
          ),
      },
      {
        path: "/shopdetails/:id",
        element: (
          <PrivateRoute>
            <ShopCategoryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-adnanaraf.vercel.app/ShopsCategoryCollection/${params.id}`
          ),
      },
    ],
  },
]);
export default Routes;
