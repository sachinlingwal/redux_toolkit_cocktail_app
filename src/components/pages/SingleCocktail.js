import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../../features/CocktailSlice";

const SingleCocktail = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const { cocktail, loading } = useSelector((state) => state.cocktail);
  const [modifiedCocktail, setmodifiedCocktail] = useState([]);
  console.log(id);
  console.log(cocktail);

  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: cocktailImg,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];

      console.log(ingredients);
      const newCocktail = {
        name,
        cocktailImg,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      console.log(newCocktail);
      setmodifiedCocktail(newCocktail);
    }
  }, [id, cocktail]);
  console.log(modifiedCocktail);

  if (!modifiedCocktail) {
    return <h1>No cocktail to display.....</h1>;
  } else {
    const {
      name,
      cocktailImg,
      info,
      category,
      glass,
      instructions,
      ingredients,
    } = modifiedCocktail;
    console.log(ingredients);
    return (
      <div style={{ textAlign: "center" }}>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <Link to="/">
              <button>Go Back</button>
            </Link>
            <h2>{name}</h2>
            {cocktailImg ? (
              <img src={cocktailImg} alt="cocktailImg" />
            ) : (
              <h1>No image found</h1>
            )}
            <p>Category :{category}</p>
            <p>info :{info}</p>
            <p>glass :{glass}</p>
            <p>instructions :{instructions}</p>
            <div>
              <h3>ingredients</h3>
              {ingredients ? (
                ingredients.map((item, i) => {
                  return <p key={i}>{item}</p>;
                })
              ) : (
                <div>
                  <h1>no ingredients</h1>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
};

export default SingleCocktail;
