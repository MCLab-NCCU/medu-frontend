import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";

const routerData: RouteObject[] = [
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/page1", Component: Page1 },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
