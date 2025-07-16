import { z } from "zod"

export const recipeSchema = z.object({
  author: z.string().nonempty(),
  email: z.email().nonempty(),
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  ingredients: z.string().nonempty(),
  instructions: z.string().nonempty(),
  imageFile: z.any()
})
