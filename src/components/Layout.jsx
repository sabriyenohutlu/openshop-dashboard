import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
const Layout = () => {
  //h-screen ve w-screen height:100vh width:100vw
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
    <Sidebar /> 
    <div className="flex flex-col flex-1">
      <Header />
      <div className="flex-1 p-4 min-h-0 overflow-auto">
        <Outlet />
      </div>
    </div>
  </div>
  );
};

export default Layout;
