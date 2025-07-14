import RecipeForm from '@/components/forms/RecipeForm'
import BackButton from '@/components/ui/button/BackButton'
import useRecipeStore from '@/state/useRecipeStore'
import { NextRouter, useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'

const RecipePage: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()
  const { id } = router.query

  const recipes: RecipeType[] = useRecipeStore(
    state => state.recipes,
  )
  const [recipe, setRecipe] = useState<RecipeType>()

  // find recipe based on id
  useEffect(() => {
    if (!id) {
      return
    }

    const findRecipe: RecipeType | undefined = recipes.find((item: RecipeType) => item.id === id)

    if (!findRecipe) {
      return
    }

    setRecipe({...findRecipe})
  }, [id])

  if (!recipe || !id) {
    return
  }


  return (
    <div className='flex gap-10'>
      <div className='form-side-bar'>
        <BackButton />
        <Image src={recipe.imageUrl} width={400} height={200} alt='' />
      </div>
      <RecipeForm id={id as string} defaultValues={recipe} />
    </div>
  )
}

export default RecipePage
