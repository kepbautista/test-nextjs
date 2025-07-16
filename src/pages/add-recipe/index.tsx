import { ReactNode } from 'react'
import RecipeForm from '@/components/forms/RecipeForm'


const defaultValue: RecipeInputType = {
  id: '',
  author: '',
  email: '',
  title: '',
  description: '',
  ingredients: '',
  instructions: '',
  imageFile: ''
}

const AddRecipePage: React.FC = (): ReactNode => (
  <RecipeForm isAddMode={true} defaultValues={defaultValue} />
)

export default AddRecipePage
