import React from "react";
import { Link } from "react-router-dom";
import { API_IMAGE_URL } from "../util/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card({
  id,
  posterPath,
  mediaType,
  originalTitle,
  originalName,
}) {
  return (
    <div className="cursor-pointer group overflow-hidden rounded-md relative pt-[150%] bg-gray-900 w-full">
      <Link
        className="w-full h-full rounded-md overflow-hidden absolute top-0 left-0"
        to={`/movie/${id.toString()}`}
      >
        {posterPath ? (
          <LazyLoadImage
            className="absolute top-0 left-0 object-cover w-full h-full rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:transition-all group-hover:duration-1000 group-hover:ease-in-out group-hover:delay-150"
            src={`${API_IMAGE_URL}/${posterPath}`}
            alt={originalTitle}
          />
        ) : (
          <div className="text-center font-bold flex items-center justify-center h-full w-full">
            {mediaType === "tv" && originalName}
            {mediaType === "movie" && originalTitle}
          </div>
        )}
      </Link>
    </div>
  );
}
