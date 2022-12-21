import { useEffect, useState } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { searchMulti } from "../util/api";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setShowMessage(false);
    try {
      const data = await searchMulti(searchQuery);
      const filteredResults = data.results.filter(
        (result) => result.media_type !== "person"
      );
      setSearchResults(filteredResults);
      if (data.results.length === 0) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  if (error) return <div>Sorry, an error occured... pls refresh the page</div>;

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <RiSearchLine className="text-2xl text-gray-600 absolute left-4 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-2xl text-gray-600 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              <RiCloseLine className="text-3xl" />
            </button>
          )}
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block text-2xl py-3 pr-4 pl-12 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-600 w-full bg-transparent"
            placeholder="Search movies or tv shows..."
            type="text"
          />
        </div>
      </form>
      <div className="mt-8">
        {showMessage && <div>No results found</div>}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {isLoading && (
            <div className="min-h-[50vh] w-full p-10 flex items-start col-span-full justify-center">
              <Spinner />
            </div>
          )}
          {!isLoading &&
            searchResults.length > 0 &&
            searchResults.map((movie) => (
              <div key={movie.id}>
                <Card
                  id={movie.id}
                  posterPath={movie.poster_path}
                  mediaType={movie.media_type}
                  originalTitle={movie.original_title}
                  originalName={movie.original_name}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
