import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        path: "/urunler",
        element: <Products />,
      },
    ],
  },
  {
    path:"/giris-yap",
    element:<Login/>
  },
  {
    path:"/kayit-ol",
    element:<Register/>
  }
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
