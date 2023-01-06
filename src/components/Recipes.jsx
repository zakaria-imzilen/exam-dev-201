import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../features/recipesSlice";
import Recipe from "./Recipe";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipesData = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  if (recipesData.status === "succeeded") {
    return (
      <div className="m-auto px-3 px-md-2 px-lg-0 py-5 recipes">
        <h1 className="my-5 text-center display-1">Recipes</h1>
        <div className="row container-lg gap-3 justify-content-center">
          {recipesData.recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default Recipes;
