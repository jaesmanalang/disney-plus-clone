import { useState, useEffect } from "react";
import { request } from "../util/constants";
import { getMovieDetails } from "../util/api";
import Banner from "../components/Banner";
import RowCards from "../components/RowCards";
import { RiLoader3Line } from "react-icons/ri";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(request.nowPlaying)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (movies.length === 0) {
      return;
    }

    async function loadMovieDetails() {
      setIsLoading(true);
      try {
        const random = Math.floor(Math.random() * movies.length - 1);
        const movie = await getMovieDetails(movies[random]?.id.toString());
        console.log(movie);
        setFeaturedMovie(movie);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setIsLoading(false);
      }
    }

    loadMovieDetails();
  }, [movies]);

  return (
    <div>
      <Banner featuredMedia={featuredMovie} isLoading={isLoading} />
      <RowCards title="Popular" fetchUrl={request.popular} />
      <RowCards title="Top Rated" fetchUrl={request.topRated} />
      <RowCards title="Now Playing" fetchUrl={request.nowPlaying} />
      <RowCards title="Upcoming" fetchUrl={request.upcoming} />
    </div>
  );
}
