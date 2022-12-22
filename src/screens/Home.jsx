import { useState, useEffect } from "react";
import { request } from "../util/constants";
import { getMovieDetails } from "../util/api";
import Banner from "../components/Banner";
import RowCards from "../components/RowCards";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { data, isLoading, error } = useFetch(request.nowPlaying);

  useEffect(() => {
    const random = Math.floor(Math.random() * data.length - 1);
    setFeaturedMovie(data[random]);
  }, [data]);

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
