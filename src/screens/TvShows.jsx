import { useEffect, useState } from 'react';
import { request } from '../util/constants';
import useFetch from '../hooks/useFetch';
import SplashScreen from '../components/SplashScreen';
import Banner from '../components/Banner';
import RowCards from '../components/RowCards';
import { getMovieDetails } from '../util/api';

export default function TvShows() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { data, isLoading, error } = useFetch(request.tvShows.topRated);

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * data.length - 1);
  //   setFeaturedMovie(data[random]);
  // }, [data]);
  useEffect(() => {
    if (data && data.length !== 0) {
      async function loadMovieDetails() {
        const random = Math.floor(Math.random() * data.length - 1);
        const movie = await getMovieDetails(data[random]?.id, 'tv');
        setFeaturedMovie(movie);
      }

      loadMovieDetails();
    }

    return () => {
      setFeaturedMovie(null);
    };
  }, [data]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div>
      <Banner featuredMedia={featuredMovie} />
      <RowCards title="Popular" fetchUrl={request.tvShows.popular} />
      <RowCards title="Top Rated" fetchUrl={request.tvShows.topRated} />
      <RowCards title="Airing Today" fetchUrl={request.tvShows.airingToday} />
      <RowCards title="On Air" fetchUrl={request.tvShows.onTheAir} />
    </div>
  );
}
