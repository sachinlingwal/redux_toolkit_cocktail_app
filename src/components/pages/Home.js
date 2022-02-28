import React from "react";
import { Link } from "react-router-dom";
import CocktailList from "../CocktailList";
import SearchInput from "../SearchInput";

const Home = () => {
  let num = 1027048;
  return (
    <>
      <h2>Home</h2>
      <Link to={`sachin/:${num}`}>Click here</Link>
      {/* search input  */}
      <SearchInput />
      {/* cocktail list  */}
      <CocktailList />
    </>
  );
};

export default Home;
