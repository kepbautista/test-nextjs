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
