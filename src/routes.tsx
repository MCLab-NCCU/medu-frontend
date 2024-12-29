import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import MatchPage from "./pages/MatchPage.tsx";
import ChatRoom from "./pages/ChatRoom.tsx";
import MainPage from "./pages/MainPage.tsx";
import UserProfile from "./pages/UserProfile.tsx";

const routerData: RouteObject[] = [
  {
    Component: RootLayout,
    children: [
      { path: "/Match", Component: MatchPage },
      { path: "/Chat", Component: ChatRoom },
      { path: "/Profile", Component: UserProfile },
      { path: "/Home", Component: Home },
      { path: "/Register", Component: RegisterPage },
      { path: "/", Component: MainPage },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
