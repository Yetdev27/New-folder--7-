import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '.recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes(); // Update filtered recipes whenever the search term changes
  }, [filterRecipes]);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;