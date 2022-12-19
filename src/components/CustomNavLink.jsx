import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, title, activeIcon, inActiveIcon }) {
  const activeClassName =
    "text-lg flex items-center py-2 px-4 relative text-slate-white";
  const inActiveClassName =
    "text-lg flex items-center py-2 px-4 relative text-slate-500 hover:text-white";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? activeClassName : inActiveClassName
      }
    >
      {({ isActive }) =>
        isActive ? (
          <>
            {activeIcon}
            <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-position duration-300 ease-in-out">
              {title}
            </span>
          </>
        ) : (
          <>
            {inActiveIcon}
            <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-position duration-300 ease-in-out">
              {title}
            </span>
          </>
        )
      }
    </NavLink>
  );
}
