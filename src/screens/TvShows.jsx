import { useEffect, useState } from 'react';
import { request } from '../util/constants';
import useFetch from '../hooks/useFetch';
import SplashScreen from '../components/SplashScreen';
import Banner from '../components/Banner';
import RowCards from '../components/RowCards';

export default function TvShows() {
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { data, isLoading, error } = useFetch(request.tvShows.popular);

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
      <RowCards title="Popular" fetchUrl={request.tvShows.popular} />
      <RowCards title="Top Rated" fetchUrl={request.tvShows.topRated} />
      <RowCards title="Airing Today" fetchUrl={request.tvShows.airingToday} />
      <RowCards title="On Air" fetchUrl={request.tvShows.onTheAir} />
    </div>
  );
}
