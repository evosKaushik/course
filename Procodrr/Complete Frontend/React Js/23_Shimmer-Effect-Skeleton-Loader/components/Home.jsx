import { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
import { useState } from "react";
import SkeletonCard from "./SkeletonCard";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu/>
      </div>
      <CountriesContainer query={query} />
    </main>
  );
};

export default Home;
