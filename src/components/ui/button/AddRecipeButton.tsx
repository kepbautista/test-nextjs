import { ReactNode } from 'react'
import { Button } from '../button'
import { NextRouter, useRouter } from 'next/router'
import Image from 'next/image'
import AddButton from '@/public/add-button.svg'

const AddRecipeButton: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()

  return (
    <Button
      variant="plain"
      onClick={() => router.push('/add-recipe')}
      className="absolute top-9 right-6 z-10">
      <Image src={AddButton} alt="" />
    </Button>
  )
}

export default AddRecipeButton
