import React from "react";
import { API_IMAGE_URL } from "../constants";

export default function Card({ posterPath, originalTitle }) {
  return (
    <img
      className="object-cover block w-1/6"
      src={`${API_IMAGE_URL}/${posterPath}`}
      alt={originalTitle}
    />
  );
}
