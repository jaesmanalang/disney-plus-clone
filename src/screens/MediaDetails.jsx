import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../util/api";
import { API_BASE_URL } from "../util/constants";
import Banner from "../components/Banner";
import RowCards from "../components/RowCards";
import SkeletonCard from "../components/SkeletonCard";

export default function MediaDetails() {
  const [media, setMedia] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { id } = params;

  const fetchSimilarUrl = `${API_BASE_URL}/movie/${id}/similar?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
  const fetchRecommendationUrl = `${API_BASE_URL}/movie/${id}/recommendations?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;

  useEffect(() => {
    let subscribed = true;
    async function loadMovieDetails() {
      setIsLoading(true);
      try {
        const movie = await getMovieDetails(id);
        if (subscribed) {
          setMedia(movie);
          setIsLoading(false);
        }
      } catch (error) {
        if (subscribed) {
          setError(error);
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

  return (
    <div>
      <Banner featuredMedia={media} />
      <RowCards title="More like this" fetchUrl={fetchSimilarUrl} />
      <RowCards title="Recommended" fetchUrl={fetchRecommendationUrl} />
    </div>
  );
}
