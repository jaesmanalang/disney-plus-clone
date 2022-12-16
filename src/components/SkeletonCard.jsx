import React from "react";

export default function SkeletonCard({ cards = 8, width = 197, height = 296 }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="bg-gray-900 h-[296px] rounded-md shrink-0 animate-pulse"
        style={{ width: `${width}px`, height: `${height}px` }}
      ></div>
    ));
}
