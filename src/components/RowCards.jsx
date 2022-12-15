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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchUrl]);

  return (
    <div className="mb-4 pl-5">
      <h4 className="text-3xl mb-2 font-bold">{title}</h4>
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
