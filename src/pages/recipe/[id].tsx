import { NextRouter, useRouter } from 'next/router'
import { ReactNode } from 'react'

const RecipePage: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()
  const { id } = router.query

  return (
    <h3>Recipe Id: {id}</h3>
  )
}

export default RecipePage
