import { Outlet } from "react-router";

import Navigation from "../components/navigation/Navigation";

function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
