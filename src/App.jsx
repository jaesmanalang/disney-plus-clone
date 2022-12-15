import { useEffect } from "react";
import RowCards from "./components/RowCards";
import Banner from "./components/Banner";
import { request } from "./constants";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="ml-28">
        <Banner />
        <RowCards title="Popular" fetchUrl={request.popular} />
        <RowCards title="Top Rated" fetchUrl={request.topRated} />
        <RowCards title="Now Playing" fetchUrl={request.nowPlaying} />
        <RowCards title="Upcoming" fetchUrl={request.upcoming} />
      </main>
    </div>
  );
}
