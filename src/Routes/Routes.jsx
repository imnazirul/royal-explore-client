import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorEl from "../Pages/ErrorEl/ErrorEl";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import MySpotList from "../Pages/MySpotList/MySpotList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorEl></ErrorEl>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all_tourists_spot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/add_tourists_spot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "/my_list",
        element: <MySpotList></MySpotList>,
      },
    ],
  },
]);

export default router;
