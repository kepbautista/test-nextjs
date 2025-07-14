import { ReactNode } from 'react'
import RecipeCard from '@/components/ui/card/RecipeCard'
import Sidebar from '@/components/layouts/Sidebar'
import { NextRouter, useRouter } from 'next/router'
import AddRecipeButton from '@/components/ui/button/AddRecipeButton'

const Home = (): ReactNode => {
  const router: NextRouter = useRouter()

  // TODO: dummy data, implement state management later
  const recipes: RecipeType[] = [
    {
      id: 1,
      author: 'Johnny',
      email: 'johnnytest@cn.com',
      title: 'Title',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typese",
      ingredients: 'tumeric',
      instruction: 'boil & let simmer',
      imageUrl: '/recipes/curry.png',
      createdDate: 'March 6, 2024',
      isFavorite: false
    },
    {
      id: 2,
      author: 'Johnny',
      email: 'johnnytest@cn.com',
      title: 'Title',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typese",
      ingredients: 'tumeric',
      instruction: 'boil & let simmer',
      imageUrl: '/recipes/curry.png',
      createdDate: 'March 6, 2024',
      isFavorite: true
    }
  ]

  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-3/4 rounded-2xl bg-white max-h-screen overflow-y-auto'>
        <div className='flex flex-col gap-3 p-10 relative'>
          <AddRecipeButton />
          {
            recipes.map((item: RecipeType) => (
              <div className='p-2 border-b border-b-black'>
                <RecipeCard {...item}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
