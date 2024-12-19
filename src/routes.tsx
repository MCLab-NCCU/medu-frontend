import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import MatchPage from "./pages/MatchPage.tsx";
import MainPage from "./pages/MainPage.tsx";

const routerData: RouteObject[] = [
  {
    Component: RootLayout,
    children: [
      { path: "/Match", Component: MatchPage },
      { path: "/Home", Component: Home },
      { path: "/Register", Component: RegisterPage },
      { path: "/", Component: MainPage },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
