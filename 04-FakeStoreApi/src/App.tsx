import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
