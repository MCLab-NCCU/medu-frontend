import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import MainPage from "./pages/MainPage";

const routerData: RouteObject[] = [
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/page1", Component: Page1 },
      { path: "/home", Component: MainPage },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
