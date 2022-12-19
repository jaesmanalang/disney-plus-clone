import { useEffect, useState } from "react";
import { API_BASE_URL } from "../util/constants";
import Card from "./Card";
import SkeletonCard from "./SkeletonCard";

export default function RowCards({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [fetchUrl]);

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 pl-5">
      <h4 className="text-lg md:text-3xl mb-3 font-semibold">{title}</h4>
      <div className="flex flex-row gap-4 flex-nowrap overflow-x-auto">
        {isLoading ? (
          <SkeletonCard cards={8} />
        ) : (
          movies?.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              originalTitle={movie.original_title}
            />
          ))
        )}
      </div>
    </div>
  );
}
