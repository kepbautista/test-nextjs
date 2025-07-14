// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

type Data = {
  name: string
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const filePath = path.join(process.cwd(), 'public', 'data.json'); // Adjust path as needed
  const fileContent = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContent);
  res.status(200).json(data)
}

export default handler
