import { useEffect, useState } from "react";
import { API_BASE_URL, API_IMAGE_URL } from "../constants";

export default function Banner() {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const random = Math.floor(Math.random() * movies.length);

  useEffect(() => {
    fetch(
      `${API_BASE_URL}/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      setFeaturedMovie(movies[random]);
    }

    console.log(featuredMovie);
  }, [movies]);

  return (
    <div className="min-h-[90vh] mb-4">
      {featuredMovie && (
        <img
          className="object-cover h-full w-full"
          src={`${API_IMAGE_URL}${featuredMovie.backdrop_path}`}
          alt={featuredMovie.original_title}
        />
      )}
    </div>
  );
}
