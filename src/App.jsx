import { useEffect } from "react";
import logoSrc from "./assets/logo.svg";
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
import RowCards from "./components/RowCards";
import Banner from "./components/Banner";
import { request } from "./constants";

export default function App() {
  return (
    <div className="layout">
      <div className="fixed left-0 top-0 bottom-0 flex flex-col items-center w-52">
        <div className="grow">
          <div className="py-8 px-6">
            <img src={logoSrc} alt="Disney Plus" />
          </div>
        </div>
        <div className="grow-2 flex flex-col bg-black w-full px-8">
          <div className="text-lg flex items-center py-2 px-4">
            <RiSearchLine />
            <span className="ml-2">Search</span>
          </div>
          <div className="text-lg flex items-center py-2 px-4">
            <RiHome4Line />
            <span className="ml-2">Home</span>
          </div>
          <div className="text-lg flex items-center py-2 px-4">
            <RiTvLine />
            <span className="ml-2">TV Shows</span>
          </div>
          <div className="text-lg flex items-center py-2 px-4">
            <RiFilmLine />
            <span className="ml-2">Movies</span>
          </div>
        </div>
      </div>
      <main className="ml-52 px-4">
        <Banner />
        <RowCards title="Popular" fetchUrl={request.popular} />
        <RowCards title="Top Rated" fetchUrl={request.topRated} />
        <RowCards title="Now Playing" fetchUrl={request.nowPlaying} />
        <RowCards title="Upcoming" fetchUrl={request.upcoming} />
      </main>
    </div>
  );
}
