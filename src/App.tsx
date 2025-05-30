import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Services from "./pages/Services";

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
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
