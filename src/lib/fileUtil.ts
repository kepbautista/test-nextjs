import { Files } from 'formidable'
import { promises as fs } from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'public', 'data.json')

export const readJsonFile = async (): Promise<ReadRecipeJsonFileResponse> => {
  const fileContent = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContent)
}

export const writeJsonFile = async (json: ReadRecipeJsonFileResponse) => {
  fs.writeFile(filePath, JSON.stringify(json))
}

export const uploadImage = async (
  files: Files<string>,
  recipeTitle: string
): Promise<string> => {
  const targetPath = path.join(process.cwd(), `/public/recipes/`)

  try {
    await fs.access(targetPath)
  } catch (e) {
    await fs.mkdir(targetPath)
  }

  if (files?.imageFile) {
    const tempPath = files?.imageFile[0].filepath
    const [, fileType] = files?.imageFile[0]?.originalFilename?.split('.') || []
    const filename: string = `${recipeTitle}.${fileType}`
    const filePath: string = `${targetPath}${filename}`

    await fs.rename(tempPath, filePath)
    return `/recipes/${filename}`
  }

  return ''
}
