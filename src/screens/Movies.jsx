import { useEffect, useState } from 'react';
import { request } from '../util/constants';
import useFetch from '../hooks/useFetch';
import SplashScreen from '../components/SplashScreen';
import Banner from '../components/Banner';
import RowCards from '../components/RowCards';

export default function Movies() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { data, isLoading, error } = useFetch(request.movies.popular);

  useEffect(() => {
    const random = Math.floor(Math.random() * data.length - 1);
    setFeaturedMovie(data[random]);
  }, [data]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div>
      <Banner featuredMedia={featuredMovie} />
      <RowCards title="Popular" fetchUrl={request.movies.popular} />
      <RowCards title="Top Rated" fetchUrl={request.movies.topRated} />
      <RowCards title="Now Playing" fetchUrl={request.movies.nowPlaying} />
      <RowCards title="Upcoming" fetchUrl={request.movies.upcoming} />
    </div>
  );
}
