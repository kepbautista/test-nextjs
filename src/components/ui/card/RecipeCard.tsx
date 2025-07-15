import { ReactNode } from 'react'
import { Card, CardContent } from '../card'
import Image from 'next/image'
import Link from 'next/link'
import SetFavoriteButton from '../button/SetFavoriteButton'
import { format } from 'date-fns'
import useRecipeStore from '@/state/useRecipeStore'
import { headers } from '@/lib/fixtures'

const RecipeCard: React.FC<RecipeType> = ({
  id,
  imageUrl,
  title,
  description,
  author,
  createdDate,
  isFavorite,
}: RecipeType): ReactNode => {
  const recipes: RecipeType[] = useRecipeStore(state => state.recipes)
  const saveRecipes: SetRecipesType = useRecipeStore(state => state.setRecipes)

  const handleSetFavorite = async () => {
    const reference: RecipeType | undefined = recipes.find(
      (item: RecipeType) => item.id === id,
    )

    if (reference) {
      const arrayCopy: RecipeType[] = [...recipes]
      const index: number = recipes.findIndex(
        (item: RecipeType) => item.id === id,
      )
      arrayCopy.splice(index, 1, { ...reference, isFavorite: !isFavorite })

      saveRecipes([...arrayCopy])

      const body: string = JSON.stringify({
        id,
        imageUrl,
        title,
        description,
        author,
        createdDate,
        isFavorite: !isFavorite,
      })

      try {
        await fetch('/api/recipe', {
        method: 'PATCH',
        headers,
        body,
      })
      } catch (error) {
        console.error('Set Favorite error:', error)
      }
    }
  }

  return (
    <Card className="border border-black p-0">
      <CardContent className="flex p-0">
        <div className="relative rounded-2xl w-xl h-xl">
          {/* TODO: implement favorite/unfavorite onclick */}
          <SetFavoriteButton
            isFavorite={isFavorite}
            handleClick={handleSetFavorite}
          />
          <Image src={imageUrl} alt="" width={600} height={600} />
        </div>
        <div className="flex flex-col justify-between px-4 py-8 font-semibold w-full">
          <h3 className="text-3xl">{title}</h3>
          <p className="trunchate">{description}</p>
          <Link href={`/recipe/${id}`}>See More</Link>
          <div className="flex justify-between w-full">
            <p>Added by: {author}</p>
            <p>Date: {format(new Date(createdDate), 'MMMM d, yyyy')}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default RecipeCard
