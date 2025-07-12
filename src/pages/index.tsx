import { ReactNode } from 'react'
import Image from 'next/image'
import RecipeCard from '@/components/ui/card/RecipeCard'

const Home = (): ReactNode => {
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
      createdDate: 'March 6, 2024'
    },
    {
      id: 1,
      author: 'Johnny',
      email: 'johnnytest@cn.com',
      title: 'Title',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typese",
      ingredients: 'tumeric',
      instruction: 'boil & let simmer',
      imageUrl: '/recipes/curry.png',
      createdDate: 'March 6, 2024'
    }
  ]

  return (
    <div className='flex'>
      <div className='w-1/4 bg-amber-200'>
        <h3>Filters</h3>
      </div>
      <div className='flex flex-col gap-3 p-10 w-3/4 rounded-2xl bg-white max-h-screen overflow-auto'>
      {
        [...recipes, ...recipes].map((item: RecipeType) => (
          <div className='p-2 border-b border-b-black'>
            <RecipeCard {...item}/>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Home
