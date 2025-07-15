type SetRecipesType = (state: RecipeType[]) => void
type SetSortModeType = (state: SortModeType) => void

type RecipeStoreStateType = {
  recipes: RecipeType[]
  setRecipes: SetRecipesType
  sortMode: SortMode
  setSortMode: SetSortModeType
}
