import { useEffect, useState } from "react";
import { API_BASE_URL } from "../util/constants";
import Card from "./Card";

export default function RowCards({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchUrl]);

  if (movies.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 pl-5">
      <h4 className="text-3xl mb-3 font-semibold">{title}</h4>
      <div className="flex flex-row gap-4 flex-nowrap overflow-x-auto">
        {movies?.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            originalTitle={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}
