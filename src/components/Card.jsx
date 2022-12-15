import React from "react";
import { API_IMAGE_URL } from "../constants";

export default function Card({ posterPath, originalTitle }) {
  return (
    <div className="w-[13%] flex items-center shrink-0">
      <img
        className="grow w-full h-full rounded-md"
        src={`${API_IMAGE_URL}/${posterPath}`}
        alt={originalTitle}
      />
    </div>
  );
}
