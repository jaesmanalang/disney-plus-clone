import { useState, useEffect } from "react";
import { request } from "../util/constants";
import Banner from "../components/Banner";
import RowCards from "../components/RowCards";

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    fetch(request.nowPlaying)
      .then((res) => res.json())
      .then((data) => {
        const random = Math.floor(Math.random() * data.results.length - 1);
        setFeaturedMovie(data.results[random]);
        console.log(data.results[random]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Banner featuredMedia={featuredMovie} />
      <RowCards title="Popular" fetchUrl={request.popular} />
      <RowCards title="Top Rated" fetchUrl={request.topRated} />
      <RowCards title="Now Playing" fetchUrl={request.nowPlaying} />
      <RowCards title="Upcoming" fetchUrl={request.upcoming} />
    </div>
  );
}
