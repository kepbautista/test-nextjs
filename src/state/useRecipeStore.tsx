import { create } from 'zustand'

const useRecipeStore = create<RecipeStoreStateType>(set => ({
  recipes: [],
  setRecipes: (state: RecipeType[]) => set({ recipes: [...state] })
}))

export default useRecipeStore
