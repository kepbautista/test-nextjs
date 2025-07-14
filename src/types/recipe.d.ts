type RecipeType = {
  id: number
  author: string
  email: string
  title: string
  description: string
  ingredients: string
  instructions: string
  imageUrl: string
  createdDate: string
  isFavorite: boolean
}

type RecipeInputType = {
  author: string
  email: string
  title: string
  description: string
  ingredients: string
  instructions: string
}

type ReadRecipeJsonFileResponse = {
  recipes: RecipeType[]
}

