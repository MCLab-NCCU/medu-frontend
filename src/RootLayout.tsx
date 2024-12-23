import { Outlet } from "react-router-dom";
import Logo from "./assets/logos/logo-pre.png";

function Header() {
  return (
    <nav className="absolute w-full h-[85px] z-10 bg-ao p-4 opacity-gradient">
      <h1 className="relative left-4 text-white text-2xl font-bold">Medu</h1>
    </nav>
  );
}

function RootLayout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default RootLayout;
