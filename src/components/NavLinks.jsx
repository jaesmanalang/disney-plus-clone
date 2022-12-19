import {
  RiHome4Line,
  RiHome4Fill,
  RiSearchLine,
  RiSearchFill,
  RiTvLine,
  RiTvFill,
  RiFilmLine,
  RiFilmFill,
} from "react-icons/ri";
import CustomNavLink from "./CustomNavLink";

export default function NavLinks() {
  const navLinks = [
    {
      title: "Search",
      path: "/search",
      activeIcon: (
        <RiSearchFill className="transition-colors duration-300 ease-in-out" />
      ),
      inActiveIcon: (
        <RiSearchLine className="transition-colors duration-300 ease-in-out" />
      ),
    },
    {
      title: "Home",
      path: "/",
      activeIcon: (
        <RiHome4Fill className="transition-colors duration-300 ease-in-out" />
      ),
      inActiveIcon: (
        <RiHome4Line className="transition-colors duration-300 ease-in-out" />
      ),
    },
    {
      title: "TV Shows",
      path: "/tv/shows",
      activeIcon: (
        <RiTvFill className="transition-colors duration-300 ease-in-out" />
      ),
      inActiveIcon: (
        <RiTvLine className="transition-colors duration-300 ease-in-out" />
      ),
    },
    {
      title: "Movies",
      path: "/movie/shows",
      activeIcon: (
        <RiFilmFill className="transition-colors duration-300 ease-in-out" />
      ),
      inActiveIcon: (
        <RiFilmLine className="transition-colors duration-300 ease-in-out" />
      ),
    },
  ];
  return (
    <>
      {navLinks.map((link, index) => (
        <CustomNavLink
          key={index}
          to={link.path}
          title={link.title}
          activeIcon={link.activeIcon}
          inActiveIcon={link.inActiveIcon}
        />
      ))}
    </>
  );
}
