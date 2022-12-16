import logoSrc from "../assets/logo.svg";
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
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 bottom-0 flex flex-col w-28 z-40">
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
            <Link
              to="/search"
              className="text-lg flex items-center py-2 px-4 relative"
            >
              <RiSearchLine />
              <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Search
              </span>
            </Link>
            <Link
              to="/"
              className="text-lg flex items-center py-2 px-4 relative"
            >
              <RiHome4Line />
              <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Home
              </span>
            </Link>
            <Link
              to="/tv/shows"
              className="text-lg flex items-center py-2 px-4 relative"
            >
              <RiTvLine />
              <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
                TV Shows
              </span>
            </Link>
            <Link
              to="/movie/shows"
              className="text-lg flex items-center py-2 px-4 relative"
            >
              <RiFilmLine />
              <span className="whitespace-nowrap pr-8 absolute left-3 invisible opacity-0 group-hover:left-10 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
                Movies
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
