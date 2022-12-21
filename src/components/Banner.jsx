import { useState, useEffect } from "react";
import { API_IMAGE_URL } from "../util/constants";
import { RiPlayFill } from "react-icons/ri";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Banner({ featuredMedia, isLoading }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (featuredMedia && featuredMedia.backdrop_path) {
      setImgLoaded(true);
    }
  }, [featuredMedia]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  if (isLoading) {
    return (
      <div className="min-h-[60vh] lg:min-h-[calc(100vh_-_160px)] bg-gradient-to-r mb-4 from-black to-gray-900 animate-pulse"></div>
    );
  }

  return (
    <div className="min-h-[60vh] lg:min-h-[calc(100vh_-_160px)] mb-4 relative flex items-end">
      {featuredMedia && featuredMedia.backdrop_path && imgLoaded ? (
        <div
          className="absolute h-full w-full"
          style={{
            backgroundImage: `url(${API_IMAGE_URL}${featuredMedia.backdrop_path})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      ) : (
        <div className="w-full h-full absolute bg-gradient-to-r from-black to-[#373c4d]"></div>
      )}
      <div className="absolute bg-gradient-to-t from-black top-0 left-0 h-full w-full"></div>
      <div className="absolute bg-gradient-to-r from-black top-0 left-0 h-full w-[320px]"></div>

      <div className="relative p-5 w-3/4 md:w-1/2 xl:w-1/3">
        {featuredMedia &&
        featuredMedia.images &&
        featuredMedia.images.logos[0] ? (
          <img
            className="block max-w-full lg:max-h-[45vh] min-h-[120px] mb-3 object-contain"
            src={`${API_IMAGE_URL}${featuredMedia.images.logos[0].file_path}`}
            alt={featuredMedia.original_title}
          />
        ) : (
          <div className="font-bold text-xl md:text-3xl mb-3">
            {featuredMedia?.original_title}
          </div>
        )}

        {featuredMedia && (
          <div className="mb-2 text-sm md:text-base">
            {new Date(featuredMedia.release_date).getFullYear().toString()}
          </div>
        )}
        <div className="max-w-md text-sm md:text-base">
          {truncate(featuredMedia?.overview, 100)}
        </div>
        {/* <div className="flex items-center">{featuredMedia?.genres}</div> */}
        <div className="flex items-center mt-4 gap-2">
          <Link to={`movie/${featuredMedia?.id?.toString()}`}>
            <Button className="text-base md:text-2xl" size="lg">
              <div className="flex items-center gap-3">
                <RiPlayFill />
                <span>Watch now</span>
              </div>
            </Button>
          </Link>
          <Button
            className="text-base md:text-2xl"
            variant="secondary"
            size="lg"
          >
            <span>+</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
