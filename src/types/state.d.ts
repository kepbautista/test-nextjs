type SetRecipesType = (state: RecipeType[]) => void
type SetSortModeType = (state: SortModeType) => void
type SetBooleanType = (state: boolean) => void

type RecipeStoreStateType = {
  recipes: RecipeType[]
  setRecipes: SetRecipesType
  sortMode: SortMode
  setSortMode: SetSortModeType
  displayFavorites: boolean
  setDisplayFavorites: SetBooleanType
  displayNotFavorites: boolean
  setDisplayNotFavories: SetBooleanType
}
