import RecipeForm from '@/components/forms/RecipeForm'
import useRecipeStore from '@/state/useRecipeStore'
import { NextRouter, useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'

const RecipePage: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()
  const { id } = router.query

  const recipes: RecipeType[] = useRecipeStore(state => state.recipes)
  const [recipe, setRecipe] = useState<RecipeType>()

  // find recipe based on id
  useEffect(() => {
    if (!id) {
      return
    }

    const findRecipe: RecipeType | undefined = recipes.find(
      (item: RecipeType) => item.id === id,
    )

    if (!findRecipe) {
      return
    }

    setRecipe({ ...findRecipe })
  }, [id])

  if (!recipe || !id) {
    return
  }

  return <RecipeForm id={id as string} defaultValues={recipe} imageUrl={recipe.imageUrl} />
}

export default RecipePage
