import Booking from "../Pages/booking/booking";
import BookingId from "../Pages/booking/bookingId";
import MyListing from "../Pages/myListing/myListing";
import List from "../Pages/List/List";
import Single from "../Pages/Single/Single";
import Event from "../Pages/Event/event";
import Dashboard from "../Pages/dashboard/index";
import MyProfile from "../Pages/myProfile";
import Favorite from "../Pages/myfavorite";
import SingleListing from "../Pages/myListing/singleListing";

export const Routings = [
  {
    path: "booking",
    role: "user",
    component: <Booking />,
  },
  {
    path: "booking/:bookingId",
    role: "user",
    component: <BookingId />,
  },
  {
    path: "my-listing",
    role: "user",
    component: <MyListing />,
  },
  {
    path: "my-listing/:singleListing",
    role: "user",
    component: <SingleListing />,
  },
  {
    path: "event",
    role: "user",
    component: <Event />,
  },
  {
    path: "my-profile",
    role: "user",
    component: <MyProfile />,
  },
  {
    path: "/dashboard",
    role: "user",
    component: <Dashboard />,
  },
  {
    path: "users",
    role: "user",
    component: <List />,
  },
  {
    path: "my-favorite",
    role: "user",
    component: <Favorite />,
  },
];
