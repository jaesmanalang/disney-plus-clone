import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../util/api";
import Banner from "../components/Banner";

export default function MediaDetails() {
  const [media, setMedia] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    async function loadMovieDetails() {
      setIsLoading(true);
      try {
        const movie = await getMovieDetails(id);
        console.log(movie);
        setMedia(movie);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setIsLoading(false);
      }
    }

    loadMovieDetails();
  }, [id]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div>
      <Banner featuredMedia={media} />
    </div>
  );
}
