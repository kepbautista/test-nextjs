import { z } from 'zod'

export const recipeSchema = z.object({
  author: z.string().trim().nonempty('Author is required.'),
  email: z.email('Invalid email address format.').trim().nonempty('Email Address is required.'),
  title: z.string().trim().nonempty('Title is required.'),
  description: z.string().trim().nonempty('Description is required.'),
  ingredients: z
    .string()
    .trim()
    .nonempty('Ingredients information is required.'),
  instructions: z
    .string()
    .trim()
    .nonempty('Instructions information is required.'),
  imageFile: z.any(),
})
