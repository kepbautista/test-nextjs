import { ReactNode, useEffect, useState } from 'react'
import RecipeCard from '@/components/ui/card/RecipeCard'
import Sidebar from '@/components/layouts/Sidebar'
import AddRecipeButton from '@/components/ui/button/AddRecipeButton'
import clsx from 'clsx'
import useRecipeStore from '@/state/useRecipeStore'
import { sortAscending, sortDescending } from '@/lib/utils'

const Home = (): ReactNode => {
  const savedRecipes: RecipeType[] = useRecipeStore(state => state.recipes)
  const saveRecipes: SetRecipesType = useRecipeStore(state => state.setRecipes)
  const sortMode: SortModeType = useRecipeStore(state => state.sortMode)
  const displayFavorites: boolean = useRecipeStore(
    state => state.displayFavorites,
  )
  const displayNotFavorites: boolean = useRecipeStore(
    state => state.displayNotFavorites,
  )
  const searchString: string = useRecipeStore(state => state.searchString)

  const [recipes, setRecipes] = useState<RecipeType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/api/recipe-list')
      const response = await data.json()
      saveRecipes([...response.recipes])
    }

    fetchData()
  }, [])

  useEffect(() => {
    // sort recipes by title
    const sorted: RecipeType[] =
      sortMode === 'asc'
        ? sortAscending(savedRecipes)
        : sortDescending(savedRecipes)

    let filtered: RecipeType[] = [...sorted]

    // filter by favorites
    if (displayFavorites && displayNotFavorites) {
      filtered = [...filtered]
    } else if (!displayFavorites && !displayNotFavorites) {
      filtered = []
    } else if (displayFavorites) {
      filtered = filtered.filter((item: RecipeType) => item.isFavorite)
    } else if (displayNotFavorites) {
      filtered = filtered.filter((item: RecipeType) => !item.isFavorite)
    }

    // filter by search string
    if (searchString.length > 0) {
      const transformString: string = searchString.toLocaleLowerCase()
      filtered = filtered.filter((item: RecipeType) =>
        item.title.toLocaleLowerCase().includes(transformString),
      )
    }

    setRecipes([...filtered])
  }, [savedRecipes, sortMode, displayFavorites, displayNotFavorites, searchString])

  return (
    <div
      className={clsx('flex', {
        'justify-end h-full rounded-2xl': savedRecipes.length === 0,
      })}>
      <Sidebar />
      <div className="w-3/4 rounded-2xl bg-white max-h-screen overflow-y-auto">
        <div className="flex flex-col gap-3 p-10 relative h-full">
          <AddRecipeButton />
          {recipes.length > 0 ? (
            recipes.map((item: RecipeType) => (
              <div key={item.id} className="p-2 border-b border-b-black">
                <RecipeCard {...item} />
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <h1 className="font-semibold text-5xl">No Record Found!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
