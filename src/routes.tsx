import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";
import MainPage from "./pages/MainPage";
import Match from "./pages/Match";

const routerData: RouteObject[] = [
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Match },
      { path: "/home", Component: MainPage },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
