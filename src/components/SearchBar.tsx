// components/SearchBar.tsx
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-md mx-auto mt-4 bg-white rounded-md border px-4 py-2 shadow">
      <input
        type="text"
        placeholder="Search your keyword"
        className="flex-grow outline-none text-gray-800"
      />
      <FiSearch className="text-gray-500 text-lg" />
    </div>
  );
};

export default SearchBar;
