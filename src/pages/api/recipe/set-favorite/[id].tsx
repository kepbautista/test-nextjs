import { readJsonFile, writeJsonFile } from '@/lib/fileUtil'
import { methodNotAllowed } from '@/lib/fixtures'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'PATCH') {
      const { id } = req.query
      const { isFavorite } = req.body

      const data: ReadRecipeJsonFileResponse = await readJsonFile()
      const arrayCopy: RecipeType[] = [...data.recipes]
      const index: number = data.recipes.findIndex(
        (item: RecipeType) => item.id === id,
      )
      const recipeCopy: RecipeType | undefined = data.recipes.find(
        (item: RecipeType) => item.id === id,
      )

      if (recipeCopy) {
        arrayCopy.splice(index, 1, { ...recipeCopy, isFavorite })
        await writeJsonFile({ recipes: [...arrayCopy] })
        res
          .status(200)
          .json({ message: `favorite recipe ${isFavorite ? 'set' : 'unset'}` })
      }
    } else {
      res.status(405).json(methodNotAllowed)
    }
  } catch (error) {
    console.error('Set Favorite Recipe error:', error)
    res.status(500).json({ 'server error': error })
  }
}

export default handler
