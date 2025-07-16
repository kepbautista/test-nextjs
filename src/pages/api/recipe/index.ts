import { readJsonFile, uploadImage, writeJsonFile } from '@/lib/fileUtil'
import { removeExcessWhiteSpaces, sortAscending } from '@/lib/utils'
import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import formidable from 'formidable'
import { methodNotAllowed } from '@/lib/fixtures'

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

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: ReadRecipeJsonFileResponse = await readJsonFile()

    const form = formidable()
    const formData = new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          reject('error')
        }
        resolve({ fields, files })
      })
    })
    const result: any = await formData

    // get data from form
    const author: string = removeExcessWhiteSpaces(
      result?.fields?.author[0] || '',
    )
    const email: string = removeExcessWhiteSpaces(
      result?.fields?.email[0] || '',
    )
    const title: string = removeExcessWhiteSpaces(
      result?.fields?.title[0] || '',
    )
    const description: string = removeExcessWhiteSpaces(
      result?.fields?.description[0] || '',
    )
    const ingredients: string = removeExcessWhiteSpaces(
      result?.fields?.ingredients[0] || '',
    )
    const instructions: string = removeExcessWhiteSpaces(
      result?.fields?.instructions[0] || '',
    )
    const recipeId: string = result?.fields?.id ? result.fields.id[0] : ''

    if (req.method === 'POST') {
      // check if title exists
      const found = data.recipes.find(
        (item: RecipeType) =>
          item.title.toLocaleLowerCase() === title.toLocaleLowerCase(),
      )

      if (found) {
        res.status(400).send({ error: 'recipe title already exists' })
      } else {
        const id: string = uuidv4() // generate recipe uuid

        // upload recipe image image
        const imageUrl: string = await uploadImage(result?.files, title)

        const arrayCopy: RecipeType[] = [
          ...data.recipes,
          {
            id,
            author,
            email,
            title,
            description,
            ingredients,
            instructions,
            imageUrl,
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
      const arrayCopy: RecipeType[] = [...data.recipes]
      const recipeCopy: RecipeType =
        data.recipes.find((item: RecipeType) => item.id === recipeId) ||
        emptyValues
      const index: number = data.recipes.findIndex(
        (item: RecipeType) => item.id === recipeId,
      )

      arrayCopy.splice(index, 1, {
        ...recipeCopy,
        author,
        email,
        description,
        ingredients,
        instructions,
      })

      await writeJsonFile({ recipes: [...arrayCopy] })
      res.status(200).json({ message: 'recipe updated' })
    }
    else {
      res.status(405).json(methodNotAllowed)
    }
  } catch (error) {
    console.error(
      `${req.method === 'POST' ? 'Add' : 'Update'} recipe error:`,
      error,
    )
    res.status(500).json({ 'server error': error })
  }
}

export default handler
