// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readJsonFile } from '@/lib/fileUtil'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await readJsonFile()
  res.status(200).json(data)
}

export default handler
