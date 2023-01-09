import { useState, useEffect } from 'react';
import { request } from '../util/constants';
import { getMovieDetails } from '../util/api';
import Banner from '../components/Banner';
import RowCards from '../components/RowCards';
import useFetch from '../hooks/useFetch';

export default function Home() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { data, isLoading, error } = useFetch(request.movies.nowPlaying);

  useEffect(() => {
    if (data && data.length !== 0) {
      async function loadMovieDetails() {
        const random = Math.floor(Math.random() * data.length - 1);
        const movie = await getMovieDetails(data[random]?.id);
        setFeaturedMovie(movie);
      }

      loadMovieDetails();
    }

    return () => {
      setFeaturedMovie(null);
    };
  }, [data]);

  useEffect(() => {
    if (featuredMovie) {
      async function loadMovieDetails() {
        const movie = await getMovieDetails(featuredMovie.id);
      }
    }
  }, [featuredMovie]);

  return (
    <div>
      <Banner featuredMedia={featuredMovie} />
      <RowCards title="Popular" fetchUrl={request.movies.popular} />
      <RowCards title="Now Playing" fetchUrl={request.movies.nowPlaying} />
      <RowCards
        title="Top Rated TV Shows"
        fetchUrl={request.tvShows.topRated}
      />
      <RowCards title="Top Rated Movies" fetchUrl={request.movies.topRated} />
      <RowCards title="Upcoming Movies" fetchUrl={request.movies.upcoming} />
      <RowCards title="Popular TV Shows" fetchUrl={request.tvShows.popular} />
    </div>
  );
}
