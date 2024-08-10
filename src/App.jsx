import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Volunteering from "./pages/Volunteering";
import Handouts from "./pages/Handouts";
import Videos from "./pages/Videos";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/help",
        element: <Help />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/apply-for-volunteering",
        element: <Volunteering />
      },
      {
        path: "/handouts",
        element: <Handouts />
      },
      {
        path: "/videos",
        element: <Videos />
      },
      {
        path: "/admin",
        element: <Dashboard />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;