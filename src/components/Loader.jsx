import React from "react";

export default function Loader() {
  return (
    <div
      className="w-full h-full bg-gray-700 animate-pulse block min-h-[120px]"
      role="status"
    ></div>
  );
}
