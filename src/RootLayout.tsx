import { Outlet } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-ao p-4">
      <h1 className="text-white text-xl font-bold">Medu</h1>
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
