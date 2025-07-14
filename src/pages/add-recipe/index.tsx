import { ReactNode } from 'react'
import RecipeForm from '@/components/forms/RecipeForm'
import BackButton from '@/components/ui/button/BackButton'
import PlaceholderIcon from '@/public/placeholder.svg'
import Image from 'next/image'

const AddRecipePage: React.FC = (): ReactNode => (
  <div className='flex gap-10'>
    <div className='flex flex-col gap-10 items-start'>
      <BackButton />
      {/* TODO: add file uploder here... */}
      <Image src={PlaceholderIcon} alt='' />
    </div>
    <RecipeForm />
  </div>
)

export default AddRecipePage
