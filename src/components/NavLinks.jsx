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
      activeIcon: <RiSearchFill />,
      inActiveIcon: <RiSearchLine />,
    },
    {
      title: "Home",
      path: "/",
      activeIcon: <RiHome4Fill />,
      inActiveIcon: <RiHome4Line />,
    },
    {
      title: "TV Shows",
      path: "/tv/shows",
      activeIcon: <RiTvFill />,
      inActiveIcon: <RiTvLine />,
    },
    {
      title: "Movies",
      path: "/movie/shows",
      activeIcon: <RiFilmFill />,
      inActiveIcon: <RiFilmLine />,
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
