type SetRecipesType = (state: RecipeType[]) => void
type SetSortModeType = (state: SortModeType) => void
type SetSortCriteriaType = (state: SortCriteriaType) => void
type SetBooleanType = (state: boolean) => void
type SetSearchStringType = (state: string) => void

type RecipeStoreStateType = {
  recipes: RecipeType[]
  setRecipes: SetRecipesType
  sortCriteria: SortCriteriaType
  setSortCriteria: SetSortCriteriaType
  sortMode: SortModeType
  setSortMode: SetSortModeType
  displayFavorites: boolean
  setDisplayFavorites: SetBooleanType
  displayNotFavorites: boolean
  setDisplayNotFavories: SetBooleanType
  searchString: string
  setSearchString: SetSearchStringType
}
