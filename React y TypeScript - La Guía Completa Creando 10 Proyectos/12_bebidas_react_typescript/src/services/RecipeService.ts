import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema"
import { Drink, SearchFilter } from "../types"
import api from "../lib/axios"

export async function getCategories() {
  const url = '/list.php?c=list'
  const { data } = await api(url)
  const result = CategoriesAPIResponseSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
}

export async function getRecipes(filters: SearchFilter) {
  const ingredientUrl = `/filter.php?i=${filters.ingredient}`;
  const categoryUrl = `/filter.php?c=${filters.category}`;

  const { data: ingredientData } = await api.get(ingredientUrl);
  const ingredientResult = DrinksAPIResponse.safeParse(ingredientData);

  const { data: categoryData } = await api.get(categoryUrl);
  const categoryResult = DrinksAPIResponse.safeParse(categoryData);

  if (!ingredientResult.success || !categoryResult.success) {
    return;
  }

  const filteredDrinks = ingredientResult.data.drinks.filter((drink) =>
    categoryResult.data.drinks.some((catDrink) => catDrink.idDrink === drink.idDrink)
  );

  return {
    drinks: filteredDrinks,
  };
}


export async function getRecipeById(id: Drink['idDrink']) {
  const url = `/lookup.php?i=${id}`
  const { data } = await api(url)
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
  if (result.success) {
    return result.data
  }
}





// export async function getCategories() {
//   const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
//   const { data } = await axios(url)
//   const result = CategoriesAPIResponseSchema.safeParse(data)
//   if (result.success) {
//     return result.data
//   }
// }

// export async function getRecipes(filters: SearchFilter) {
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
//   const { data } = await axios(url)
//   const result = DrinksAPIResponse.safeParse(data)
//   if (result.success) {
//     return result.data
//   }
// }

// export async function getRecipeById(id: Drink["idDrink"]) {
//   const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
//   const { data } = await axios(url)
//   const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
//   if (result.success) {
//     return result.data
//   }
// }
