import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { recipeSchema } from "@/validators/recipeSchema"
import FormInputField from "../ui/input/FormInputField"
import FormTextAreaField from "../ui/input/FormTextAreaField"
import { NextRouter, useRouter } from "next/router"
import { ReactNode } from "react"

type RecipeFormProps = {
  defaultValues: RecipeInputType
}

const RecipeForm: React.FC<RecipeFormProps> = ({ defaultValues }: RecipeFormProps): ReactNode => {
  const router: NextRouter = useRouter()

  const form = useForm<z.infer<typeof recipeSchema>>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      author: '',
      email: '',
      title: '',
      description: '',
      ingredients: '',
      instructions: ''
    },
  })

  const onSubmit = async (values: z.infer<typeof recipeSchema>) => {
    try {
      await fetch('/api/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values }),
      })

      // go back to previous page after successful adding of recipe
      router.back()
    } catch (error) {
      console.error('Add Recipe error:', error)
    }
  }

  const formInputFields: FormInputType[] = [
    { name: 'author', label: 'Your Name' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'title', label: 'Title' }
  ]

  const formTextAreaFields: FormInputType[] = [
    { name: 'description', label: 'Description'},
    { name: 'ingredients', label: 'Ingredients', className: 'h-32' },
    { name: 'instructions', label: 'Instructions', className: 'h-32' },
  ]

  return (
    <div className="w-full pl-5 pr-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-screen overflow-y-scroll">
          {
            formInputFields.map((item: FormInputType) => 
              <FormInputField form={form} {...item} />
            )
          }
          {
            formTextAreaFields.map((item: FormInputType) =>
              <FormTextAreaField form={form} {...item} />
            )
          }
          <div className="flex justify-end w-full">
            <Button className="bg-[#435490] rounded-2xl w-36" size='lg' type="submit">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default RecipeForm
