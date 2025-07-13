import { ReactNode } from 'react'
import { Button } from '../button'
import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'

const AddRecipeButton: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()

  return (
    <Button
      variant='plain'
      onClick={() => router.push('/add-recipe')}
      className='absolute top-0 right-0 z-10'>
      <Image src='/add-button.svg' width={60} height={60} alt='' />
    </Button>
  )
}

export default AddRecipeButton
