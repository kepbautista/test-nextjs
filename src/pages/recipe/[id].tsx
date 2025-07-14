import useRecipeStore from '@/state/useRecipeStore'
import { NextRouter, useRouter } from 'next/router'
import { ReactNode } from 'react'

const RecipePage: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()
  const { id } = router.query

  const recipes: RecipeType[] = useRecipeStore(
    state => state.recipes,
  )

  console.log({
    id: 'state-log',
    recipes
  })

  return (
    <div>
      <h3>Recipe Id: {id}</h3>
      <ul>
        {
          recipes.map((item: RecipeType) => 
            <li>{`id: ${item.id} - ${item.title}`}</li>
          )
        }
      </ul>
    </div>
  )
}

export default RecipePage
