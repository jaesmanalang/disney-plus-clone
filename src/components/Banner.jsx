import { useEffect, useState } from "react";
import { API_BASE_URL, API_IMAGE_URL, request } from "../constants";

export default function Banner() {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    fetch(request.nowPlaying)
      .then((res) => res.json())
      .then((data) => {
        const random = Math.floor(Math.random() * data.results.length - 1);
        setFeaturedMovie(data.results[random]);
        console.log(data.results[random]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div className="min-h-[90vh] mb-4 relative flex items-end">
      {featuredMovie && (
        <div
          className="absolute h-full w-full"
          style={{
            backgroundImage: `url(${API_IMAGE_URL}${featuredMovie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></div>
        // <img
        //   className="object-cover h-full w-full fixed"
        //   src={`${API_IMAGE_URL}${featuredMovie.backdrop_path}`}
        //   alt={featuredMovie.original_title}
        // />
      )}
      <div className="absolute bg-gradient-to-t from-black top-0 left-0 h-full w-full"></div>

      <div className="relative p-5 w-1/4">
        <div>{featuredMovie.release_date}</div>
        <div>{truncate(featuredMovie.overview, 80)}</div>
        <div className="flex items-center">{featuredMovie.genres}</div>
        <div className="flex items-center">
          <button>Watch now</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
