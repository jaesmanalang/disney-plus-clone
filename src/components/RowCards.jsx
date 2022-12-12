import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";
import Card from "./Card";

export default function RowCards() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `${API_BASE_URL}/movie/popular?api_key=${
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

  return (
    <div
      className="flex gap-4 overflow-x-auto
    "
    >
      {movies.map((movie) => (
        <Card
          key={movie.id}
          posterPath={movie.poster_path}
          originalTitle={movie.original_title}
        />
      ))}
    </div>
  );
}
