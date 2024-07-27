import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames'
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const SidebarLink = ({path, icon,label}) => {
  const { pathname } = useLocation()

	return (
		<Link
			to={path}
			className={classNames(pathname === path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl text-white">{icon}</span>
			{label}
		</Link>
	)
};



export default SidebarLink;
