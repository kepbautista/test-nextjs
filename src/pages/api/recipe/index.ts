import { readJsonFile, writeJsonFile } from "@/lib/fileUtil"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: ReadRecipeJsonFileResponse = await readJsonFile()

  // get last id
  const lastId: number = data.recipes.length > 0 ? data.recipes[data.recipes.length - 1].id : 0

  if (req.method === 'POST') {
    await writeJsonFile({ recipes: [...data.recipes, {
        id: lastId + 1,
        ...req.body,
        imageUrl: '/recipes/curry.png',
        createdDate: (new Date()).toLocaleString(),
        isFavorite: false
      }] })

    res.status(200).json({message: 'data added'})
  }
}

export default handler
