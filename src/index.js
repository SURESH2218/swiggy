import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import About from "./About/About";
import Error from "./About/Error";
import Header from "./Header/Header";
import NewComponent from "./About/NewComponent";
import RestaurantMenu from "./RestaurantMenu/RestaurantMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />,
      </>
    ),
  },
  {
    path: "/newcomponent",
    element: (
      <>
        <Header />
        <NewComponent />,
      </>
    ),
  },
  {
    path: "/restaurants/:resId",
    element: (
      <>
        <Header />
        <RestaurantMenu />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
