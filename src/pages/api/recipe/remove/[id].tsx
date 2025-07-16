import { readJsonFile, writeJsonFile } from '@/lib/fileUtil'
import { methodNotAllowed } from '@/lib/fixtures'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { id } = req.query

      const data: ReadRecipeJsonFileResponse = await readJsonFile()
      const arrayCopy: RecipeType[] = [...data.recipes]
      const index: number = data.recipes.findIndex(
        (item: RecipeType) => item.id === id,
      )

      if (index > -1) {
        arrayCopy.splice(index, 1)
      }

      await writeJsonFile({ recipes: [...arrayCopy] })
      res.status(200).json({ message: 'recipe delete' })
    }
    else {
      res.status(405).json(methodNotAllowed)
    }
  } catch (error) {
    console.error('Delete Recipe error:', error)
    res.status(500).json({ 'server error': error })
  }
}

export default handler
