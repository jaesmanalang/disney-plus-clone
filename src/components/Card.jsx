import React from "react";
import { Link } from "react-router-dom";
import { API_IMAGE_URL } from "../util/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card({ id, posterPath, originalTitle }) {
  return (
    <div className="w-[13%] flex items-center shrink-0 cursor-pointer group">
      <Link
        className="w-full h-full rounded-md overflow-hidden bg-gray-900"
        to={`/movie/${id.toString()}`}
      >
        <LazyLoadImage
          className="grow w-full h-full rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:transition-all group-hover:duration-1000 group-hover:ease-in-out group-hover:delay-150"
          src={`${API_IMAGE_URL}/${posterPath}`}
          alt={originalTitle}
          placeholder={
            <div className="bg-gray-900 h-[296px] w-full rounded-md shrink-0 animate-pulse"></div>
          }
        />
      </Link>
    </div>
  );
}
