import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddProduct from "./pages/Products/AddProduct";
import Messages from "./pages/Messages/Messages";
import Orders from "./pages/Orders/Orders";
import Users from "./pages/Users/Users";
import Customers from "./pages/Customers/Customers";
import Settings from "./pages/Settings/Settings";
import MyProfile from "./pages/MyProfile/MyProfile";

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
      {
        path: "/urun-ekle",
        element: <AddProduct />,
      },
      {
        path: "/musteriler",
        element: <Customers />,
      },
      {
        path: "/siparisler",
        element: <Orders />,
      },
      {
        path: "/kullanicilar",
        element: <Users />,
      },
      {
        path: "/mesajlar",
        element: <Messages />,
      },
      {
        path: "/ayarlar",
        element: <Settings />,
      },
      {
        path: "/profilim",
        element: <MyProfile />,
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
