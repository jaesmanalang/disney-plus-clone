import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";
import Card from "./Card";

export default function RowCards({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchUrl]);

  return (
    <div className="mb-4 pl-5">
      <h4 className="text-2xl mb-2">{title}</h4>
      <div
        className="flex gap-4 overflow-x-auto
    "
      >
        {movies?.map((movie) => (
          <Card
            key={movie.id}
            posterPath={movie.poster_path}
            originalTitle={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}
