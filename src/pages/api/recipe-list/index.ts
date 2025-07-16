// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readJsonFile } from '@/lib/fileUtil'
import { methodNotAllowed } from '@/lib/fixtures'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const data = await readJsonFile()
      res.status(200).json(data)
    }
    else {
      res.status(405).json(methodNotAllowed)
    }
  } catch (error) {
    console.error('Read JSON file error:', error)
    res.status(500).json({ 'server error': error })
  }
}

export default handler
