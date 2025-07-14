import { ReactNode, useEffect, useState } from 'react'
import RecipeCard from '@/components/ui/card/RecipeCard'
import Sidebar from '@/components/layouts/Sidebar'
import { NextRouter, useRouter } from 'next/router'
import AddRecipeButton from '@/components/ui/button/AddRecipeButton'
import clsx from 'clsx'

const Home = (): ReactNode => {
  const router: NextRouter = useRouter()
  const [recipes, setRecipes] = useState<RecipeType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/api/recipe-list')
      const response = await data.json()
      setRecipes([...response.recipes])
    }
    
    fetchData()
  }, [])

  return (
    <div className={clsx('flex', {'justify-end h-full rounded-2xl': recipes.length === 0})}>
      { recipes.length > 0 && <Sidebar />}
      <div className='w-3/4 rounded-2xl bg-white max-h-screen overflow-y-auto'>
        <div className='flex flex-col gap-3 p-10 relative h-full'>
          <AddRecipeButton />
          {
            recipes.length > 0 ? recipes.map((item: RecipeType) => (
              <div className='p-2 border-b border-b-black'>
                <RecipeCard {...item}/>
              </div>
            ))
            :
            <div className='flex justify-center items-center w-full h-full'>
              <h1 className='font-semibold text-5xl'>No Record Found!</h1>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Home
