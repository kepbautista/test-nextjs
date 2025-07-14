import { ReactNode } from 'react'
import RecipeForm from '@/components/forms/RecipeForm'
import BackButton from '@/components/ui/button/BackButton'
import PlaceholderIcon from '@/public/placeholder.svg'
import Image from 'next/image'

const defaultValue: RecipeInputType = {
  author: '',
  email: '',
  title: '',
  description: '',
  ingredients: '',
  instructions: ''
}

const AddRecipePage: React.FC = (): ReactNode => (
  <div className='flex gap-10'>
    <div className='form-side-bar'>
      <BackButton />
      {/* TODO: add file uploder here... */}
      <Image src={PlaceholderIcon} alt='' />
    </div>
    <RecipeForm isAddMode={true} defaultValues={defaultValue} />
  </div>
)

export default AddRecipePage
