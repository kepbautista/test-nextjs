import { create } from 'zustand'

const useRecipeStore = create<RecipeStoreStateType>(set => ({
  recipes: [],
  setRecipes: (state: RecipeType[]) => set({ recipes: [...state] }),
  sortMode: 'asc',
  setSortMode: (state: SortModeType) => set({ sortMode: state }),
  sortCriteria: 'title',
  setSortCriteria: (state: SortCriteriaType) => set({ sortCriteria: state }),
  displayFavorites: true,
  setDisplayFavorites: (state: boolean) => set({ displayFavorites: state }),
  displayNotFavorites: true,
  setDisplayNotFavories: (state: boolean) => set(({ displayNotFavorites: state } )),
  searchString: '',
  setSearchString: (state: string) => set({ searchString: state })
}))

export default useRecipeStore
