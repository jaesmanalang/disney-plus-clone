import { Link } from "react-router-dom";
import logoSrc from "../assets/logo.svg";
import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
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
  );
}
