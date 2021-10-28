//Pages Import
import Home from "../pages/index";
import Report from "../pages/report";
import Offer from "../pages/offer";
import Payment from "../pages/payment";
import Login from "../pages/login";
import Setting from "../pages/setting";

const routes = [
  {
    path: "/",
    component: Home,
    isPrivate: false,
  },
  {
    path: "/view_reports",
    component: Report,
    isPrivate: true,
  },
  {
    path: "/offers",
    component: Offer,
    isPrivate: true,
  },
  {
    path: "/payments",
    component: Payment,
    isPrivate: true,
  },
  {
    path: "/settings",
    component: Setting,
    isPrivate: true,
  },
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
];

export default routes;
