import Fingerprint from "@material-ui/icons/Fingerprint";
import LoginPage from "views/Pages/LoginPage.jsx";

const pagesRoutes = [
  {
    path: "/login",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  }
];

export default pagesRoutes;
