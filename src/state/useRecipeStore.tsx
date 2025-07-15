import { create } from 'zustand'

const useRecipeStore = create<RecipeStoreStateType>(set => ({
  recipes: [],
  setRecipes: (state: RecipeType[]) => set({ recipes: [...state] }),
  sortMode: 'asc',
  setSortMode: (state: SortModeType) => set({ sortMode: state }),
  displayFavorites: true,
  setDisplayFavorites: (state: boolean) => set({ displayFavorites: state }),
  displayNotFavorites: true,
  setDisplayNotFavories: (state: boolean) => set(({ displayNotFavorites: state } ))
}))

export default useRecipeStore
