import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktail } from "../features/CocktailSlice";
import "./SearchInput.css";
const SearchInput = () => {
  const searchValue = useRef();

  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail({ searchText }));
  };
  return (
    <form>
      <div className="search">
        <label htmlFor="search">Search Cocktail</label>
        <input
          type="text"
          id="search"
          placeholder="Search "
          name="search"
          ref={searchValue}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchInput;
