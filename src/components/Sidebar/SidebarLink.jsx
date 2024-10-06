import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";
const SidebarLink = ({ path, icon, label, nested }) => {
  const { pathname } = useLocation();

  const [toggleMenu, setToggleMenu] = useState(false);

  const openMenu = () => {
    setToggleMenu((pre) => !pre);
  };

  return (
    <>
      {nested === true ? (
        <Link
          to={path}
          className={classNames(
            pathname === path
              ? "bg-neutral-700 text-white"
              : "text-neutral-400",
            linkClass
          )}
        >
          <div>
            <span className="text-xl text-white">{icon}</span>
            <span>{label}</span>
            <button style={{color:"red"}} onClick={openMenu + "Aç"}>{toggleMenu}</button>
          </div>
        </Link>
      ) : (
        <Link
          to={path}
          className={classNames(
            pathname === path
              ? "bg-neutral-700 text-white"
              : "text-neutral-400",
            linkClass
          )}
        >
          <div>
            <span className="text-xl text-white">{icon}</span>
            <span>{label}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default SidebarLink;
