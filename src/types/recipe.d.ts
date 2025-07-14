type RecipeType = {
  id?: string
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
  id?: string
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

