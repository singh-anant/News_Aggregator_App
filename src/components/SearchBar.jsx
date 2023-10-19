// It will contain search bar and search button...
import { useRef } from "react";
import { SearchNews } from "../utils/SearchNews";

const SearchBar = () => {
  const getSearchBarText = useRef(null);
  const handleSearchButton = async () => {
    const getQuery = getSearchBarText?.current?.value;
    const newsObject = await SearchNews(getQuery);
  };

  return (
    <div className="">
      <form
        className="p-6 m-6 flex items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 w-1/2 h-12 border-solid border-2 border-black"
          placeholder="Search For Some News"
          ref={getSearchBarText}
        />
        <button
          onClick={handleSearchButton}
          className="py-3 px-4 bg-red-500 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
