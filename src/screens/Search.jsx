import { RiSearchLine } from "react-icons/ri";

export default function Search() {
  return (
    <div>
      <div className="mx-auto max-w-5xl py-4">
        <form>
          <div className="relative">
            <RiSearchLine className="text-2xl text-gray-600 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              className="block text-2xl py-3 pr-4 pl-12 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-600 w-full bg-transparent"
              placeholder="Search movies..."
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
