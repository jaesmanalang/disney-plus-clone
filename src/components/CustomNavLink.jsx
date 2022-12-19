import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, title, activeIcon, inActiveIcon }) {
  return (
    <NavLink to={to} className="text-lg flex items-center py-2 px-4 relative">
      {({ isActive }) =>
        isActive ? (
          <>
            {activeIcon}
            <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out font-bold">
              {title}
            </span>
          </>
        ) : (
          <>
            {inActiveIcon}
            <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
              {title}
            </span>
          </>
        )
      }
    </NavLink>
  );
}
