import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoSrc from "../assets/logo.svg";
import NavLinks from "./NavLinks";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 hidden lg:flex flex-col w-28 z-40">
        <Link to="/" className="py-8 px-6 fixed top-0 left-0 z-50">
          <img
            className="w-[74px] max-w-full block"
            src={logoSrc}
            alt="Disney Plus"
          />
        </Link>
        <div className="grow flex items-center">
          <div className="w-28 bg-gradient-to-r from-black group">
            <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-black w-28 group-hover:w-[50vw] transition-all ease-in-out duration-300 pointer-events-none"></div>
            <div className="flex flex-col justify-center items-center gap-4">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden flex items-center justify-between p-4 min-h-[84px] fixed top-0 left-0 w-full z-[200] bg-black/30">
        <Link to="/" className="">
          <img
            className="w-[74px] max-w-full block"
            src={logoSrc}
            alt="Disney Plus"
          />
        </Link>
        {!menuOpen ? (
          <button
            onClick={() => setMenuOpen(true)}
            className="inline-block py-2 pl-2"
          >
            <RiMenu4Fill className="text-4xl font-bold" />
          </button>
        ) : (
          <div className="fixed z-50 top-0 left-0 w-full h-full bg-[rgba(0,0,0,.85)]">
            <button
              className="absolute right-3 top-4"
              onClick={() => setMenuOpen(false)}
            >
              <RiCloseFill className="text-5xl font-bold" />
            </button>
            <ul className="flex flex-col h-full">
              <li className="grow flex items-center justify-center text-center">
                <NavLink
                  className="text-4xl grow"
                  to="/search"
                  onClick={() => setMenuOpen(false)}
                >
                  Search
                </NavLink>
              </li>
              <li className="grow flex items-center justify-center text-center">
                <NavLink
                  className="text-4xl"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="grow flex items-center justify-center text-center">
                <NavLink
                  className="text-4xl"
                  to="/tv/shows"
                  onClick={() => setMenuOpen(false)}
                >
                  TV Shows
                </NavLink>
              </li>

              <li className="grow flex items-center justify-center text-center">
                <NavLink
                  className="text-4xl"
                  to="/movies"
                  onClick={() => setMenuOpen(false)}
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
