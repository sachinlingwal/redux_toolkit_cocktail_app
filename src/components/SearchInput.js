import React, { useRef } from "react";
import "./SearchInput.css";
const SearchInput = () => {
  const searchValue = useRef();
  return (
    <div className="search">
      <label htmlFor="search">Search Cocktail</label>
      <input
        type="text"
        id="search"
        placeholder="Search "
        name="search"
        ref={searchValue}
      />
    </div>
  );
};

export default SearchInput;
