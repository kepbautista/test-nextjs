import { readJsonFile, writeJsonFile } from '@/lib/fileUtil'
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

const emptyValues: RecipeType = {
  id: '',
  author: '',
  email: '',
  title: '',
  description: '',
  ingredients: '',
  instructions: '',
  imageUrl: '/placeholder.svg',
  createdDate: new Date().toLocaleString(),
  isFavorite: false,
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: ReadRecipeJsonFileResponse = await readJsonFile()

    if (req.method === 'POST') {
      const id: string = uuidv4()
      await writeJsonFile({
        recipes: [
          ...data.recipes,
          {
            id,
            ...req.body,
            imageUrl: '/recipes/curry.png', // TODO: replace with uploaded file later
            createdDate: new Date().toLocaleString(),
            isFavorite: false,
          },
        ],
      })

      res.status(200).json({ message: 'recipe added' })
    } else if (req.method === 'PATCH') {
      const { id } = req.body
      const arrayCopy: RecipeType[] = [...data.recipes]
      const recipeCopy: RecipeType =
        data.recipes.find((item: RecipeType) => item.id === id) || emptyValues
      const index: number = data.recipes.findIndex(
        (item: RecipeType) => item.id === id,
      )
      arrayCopy.splice(index, 1, { ...recipeCopy, id, ...req.body })

      await writeJsonFile({ recipes: [...arrayCopy] })
      res.status(200).json({ message: 'recipe updated' })
    }
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

export default handler
