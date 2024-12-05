import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
// import Page1 from "./pages/Page1";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Match from "./pages/Match";

const routerData: RouteObject[] = [
  {
    Component: RootLayout,
    children: [
      { path: "/main", Component: MainPage },
      { path: "/", Component: Register },
      { path: "/Login", Component: Login },
      { path: "/home", Component: Home },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
