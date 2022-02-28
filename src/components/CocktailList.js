import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCocktails } from "../features/CocktailSlice";
import "./CocktailList.css";

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => state.cocktail);
  console.log(cocktails);
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      let newCocktails = cocktails.map((cocktail) => {
        let { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
          cocktail;
        return {
          id: idDrink,
          name: strDrink,
          imageUrl: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  if (!cocktails) {
    return <h2>no cocktail match your search</h2>;
  }
  return (
    <div className="cocktailList">
      {modifiedCocktail.map((item) => {
        const { id, name, glass, imageUrl, info } = item;
        // console.log(id);
        return (
          <div className="container" key={id}>
            <img src={imageUrl} alt="img" height={300} width={300} />
            <h3 className="title">{name}</h3>
            <h3 className="title">{glass}</h3>
            <h3 className="title">{info}</h3>
            <Link to={`cocktail/${id}`}>
              <button>More Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CocktailList;
