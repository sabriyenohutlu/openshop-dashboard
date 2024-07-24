import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
const Layout = () => {
  //h-screen ve w-screen height:100vh width:100vw
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="p-4">
        <div className="bg-teal-200">Header</div>
        <Outlet />
      </div>
      {/* <div>footer</div> */}
    </div>
  );
};

export default Layout;
