import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";
import MainPage from "./pages/MainPage.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Match from "./pages/Match";
import LayoutExample from "./pages/LayoutExample.tsx"
import Swap from "./pages/Swap.tsx"

const routerData: RouteObject[] = [
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: MainPage },
      { path: "/home", Component: Home },
      { path: "/register", Component: Register },
      { path: "/login", Component: Login },
      { path: "/layout", Component: LayoutExample},
      { path: "/swap", Component: Swap}
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
