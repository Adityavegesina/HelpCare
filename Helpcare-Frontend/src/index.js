import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import Register from "./LandingPageComponent/Register/Register";
import Login from "./LandingPageComponent/Login/Login";
import Dashboard from "./Hospital/Dashboard/Dashboard";
import Reception from "./Hospital/Dashboard/Reception/Reception";
import Mainpage from "./Doctor/Mainpage/Mainpage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },{
      path:"/hospital",
      element:<Dashboard/>
    },
    {
      path:"/reception",
      element:<Reception/>
    },
    {
      path:"/doctor",
      element:<Mainpage/>
    }])
  const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>);
