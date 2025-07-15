import { readJsonFile, writeJsonFile } from '@/lib/fileUtil'
import { removeExcessWhiteSpaces, sortAscending } from '@/lib/utils'
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
      // check if title exists
      const found = data.recipes.find(
          (item: RecipeType) =>
            item.title.toLocaleLowerCase() ===
            removeExcessWhiteSpaces(req.body.title).toLocaleLowerCase(),
        )

      if (found) {
        res.status(400).send({ error: 'recipe title already exists' })
      } else {
        const id: string = uuidv4()
        const { author, email, title, description, ingredients, instructions } =
          req.body
        const arrayCopy: RecipeType[] = [
          ...data.recipes,
          {
            id,
            author: removeExcessWhiteSpaces(author),
            email,
            title: removeExcessWhiteSpaces(title),
            description: removeExcessWhiteSpaces(description),
            ingredients: removeExcessWhiteSpaces(ingredients),
            instructions: removeExcessWhiteSpaces(instructions),
            imageUrl: '/recipes/curry.png', // TODO: replace with uploaded file later
            createdDate: new Date().toLocaleString(),
            isFavorite: false,
          },
        ]

        const sortedArray: RecipeType[] = sortAscending(arrayCopy)
        await writeJsonFile({
          recipes: [...sortedArray],
        })

        res.status(200).json({ message: 'recipe added' })
      }
    } else if (req.method === 'PATCH') {
      const { id } = req.body
      const arrayCopy: RecipeType[] = [...data.recipes]
      const recipeCopy: RecipeType =
        data.recipes.find((item: RecipeType) => item.id === id) || emptyValues
      const index: number = data.recipes.findIndex(
        (item: RecipeType) => item.id === id,
      )

      const { author, description, ingredients, instructions } = req.body
      arrayCopy.splice(index, 1, {
        ...recipeCopy,
        ...req.body,
        id,
        author: removeExcessWhiteSpaces(author),
        description: removeExcessWhiteSpaces(description),
        ingredients: removeExcessWhiteSpaces(ingredients),
        instructions: removeExcessWhiteSpaces(instructions),
      })

      await writeJsonFile({ recipes: [...arrayCopy] })
      res.status(200).json({ message: 'recipe updated' })
    }
  } catch (error) {
    res.status(500).json({ message: 'server error' })
  }
}

export default handler
