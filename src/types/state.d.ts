type SetRecipesType = (state: RecipeType[]) => void

type RecipeStoreStateType = {
  recipes: RecipeType[]
  setRecipes: SetRecipesType
}
