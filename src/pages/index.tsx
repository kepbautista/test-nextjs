import { ReactNode, use, useEffect, useState } from 'react'
import RecipeCard from '@/components/ui/card/RecipeCard'
import Sidebar from '@/components/layouts/Sidebar'
import AddRecipeButton from '@/components/ui/button/AddRecipeButton'
import clsx from 'clsx'
import useRecipeStore from '@/state/useRecipeStore'
import { sortAscending, sortDescending } from '@/lib/utils'

const Home = (): ReactNode => {
  const saveRecipes: SetRecipesType = useRecipeStore(state => state.setRecipes)
  const sortMode: SortModeType = useRecipeStore(state => state.sortMode)

  const [recipes, setRecipes] = useState<RecipeType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/api/recipe-list')
      const response = await data.json()
      const arrayCopy: RecipeType[] = [...response.recipes]

      setRecipes([...arrayCopy])
      saveRecipes([...arrayCopy])
    }

    fetchData()
  }, [])

  useEffect(() => {
    setRecipes(
      sortMode === 'asc'
        ? [...sortAscending(recipes)]
        : [...sortDescending(recipes)]
    )
  }, [sortMode])

  return (
    <div
      className={clsx('flex', {
        'justify-end h-full rounded-2xl': recipes.length === 0,
      })}>
      {recipes.length > 0 && <Sidebar />}
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
