import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/constans";
import SidebarLink from "./SidebarLink";
import classNames from "classnames";
const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-200 text-lg">OpenShop</span>
      </div>
    
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink
            key={link.key}
            label={link.label}
            path={link.path}
            icon={link.icon}
          />
        ))}
      </div>
     
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
         link.nested && 
         link.nesteds.map((link)=>(
         <SidebarLink
            key={link.key}
            label={link.label}
            path={link.path}
            icon={link.icon}
          />)))
        )}

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => {
          return (
            <SidebarLink
              key={link.key}
              label={link.label}
              path={link.path}
              icon={link.icon}
            />
          );
        })}
        <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
