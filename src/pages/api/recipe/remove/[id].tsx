import { readJsonFile, writeJsonFile } from '@/lib/fileUtil'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: ReadRecipeJsonFileResponse = await readJsonFile()

    if (req.method === 'DELETE') {
      const { id } = req.query
      const arrayCopy: RecipeType[] = [...data.recipes]
      const index: number = data.recipes.findIndex(
        (item: RecipeType) => item.id === id,
      )

      if (index > -1) {
        arrayCopy.splice(index, 1);
      }
      
      await writeJsonFile({ recipes: [...arrayCopy] })
      res.status(200).json({ message: 'recipe delete' })
    }
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

export default handler
