import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorEl from "../Pages/ErrorEl/ErrorEl";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import MySpotList from "../Pages/MySpotList/MySpotList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TouristSpotDetails from "../Pages/TouristSpotDetails/TouristSpotDetails";
import CountrySpots from "../Pages/CountrySpots/CountrySpots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorEl></ErrorEl>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/country.json"),
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
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/my_list",
        element: (
          <PrivateRoute>
            <MySpotList></MySpotList>
          </PrivateRoute>
        ),
      },
      {
        path: "/tourist_spot_details/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails></TouristSpotDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/spot_list/:country",
        element: <CountrySpots></CountrySpots>,
      },
    ],
  },
]);

export default router;
