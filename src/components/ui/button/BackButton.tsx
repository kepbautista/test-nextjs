import { ReactNode } from 'react'
import { Button } from '../button'
import { NextRouter, useRouter } from 'next/router'

const BackButton: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()

  return (
    <Button
      variant="plain"
      onClick={() => router.back()}
      className="flex gap-3 text-4xl font-normal">
      <h3>{'<'}</h3>
      <h3>Back</h3>
    </Button>
  )
}

export default BackButton
