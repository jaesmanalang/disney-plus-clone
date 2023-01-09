import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../util/api';
import { API_BASE_URL } from '../util/constants';
import Banner from '../components/Banner';
import RowCards from '../components/RowCards';
import SkeletonCard from '../components/SkeletonCard';

export default function MediaDetails({ mediaType = 'movie' }) {
  const [media, setMedia] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { id } = params;

  const fetchSimilarUrl = `${API_BASE_URL}/${mediaType}/${id}/similar?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  const fetchRecommendationUrl = `${API_BASE_URL}/${mediaType}/${id}/recommendations?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;

  useEffect(() => {
    let subscribed = true;
    async function loadMovieDetails() {
      setIsLoading(true);
      try {
        const movie = await getMovieDetails(id, mediaType);
        if (subscribed) {
          setMedia(movie);
          setIsLoading(false);
        }
      } catch (error) {
        if (subscribed) {
          setError(error);
          console.log(error);
          setIsLoading(false);
        }
      }
    }

    loadMovieDetails();

    window.scrollTo(0, 0);

    return () => {
      subscribed = false;
      setMedia(null);
    };
  }, [id]);

  // if (isLoading) return <div>loading...</div>;

  if (error) {
    return <div>An error occured.</div>;
  }

  return (
    <div>
      <Banner featuredMedia={media} mediaType={mediaType} />
      <RowCards title="More like this" fetchUrl={fetchSimilarUrl} />
      <RowCards title="Recommended" fetchUrl={fetchRecommendationUrl} />
    </div>
  );
}
