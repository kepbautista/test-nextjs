import { create } from 'zustand'

const useRecipeStore = create<RecipeStoreStateType>(set => ({
  recipes: [],
  setRecipes: (state: RecipeType[]) => set({ recipes: [...state] }),
  sortMode: 'asc',
  setSortMode: (state: SortModeType) => set({ sortMode: state })
}))

export default useRecipeStore
