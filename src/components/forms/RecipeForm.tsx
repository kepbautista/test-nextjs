import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { recipeSchema } from '@/validators/recipeSchema'
import FormInputField from '../ui/input/FormInputField'
import FormTextAreaField from '../ui/input/FormTextAreaField'
import { NextRouter, useRouter } from 'next/router'
import { ReactNode } from 'react'
import { PAGE_URL } from '@/lib/fixtures'
import { toast } from 'sonner'

type RecipeFormProps = {
  id?: string
  isAddMode?: boolean
  defaultValues: RecipeInputType
}

const RecipeForm: React.FC<RecipeFormProps> = ({
  defaultValues,
  isAddMode = false,
  id,
}: RecipeFormProps): ReactNode => {
  const router: NextRouter = useRouter()

  const form = useForm<z.infer<typeof recipeSchema>>({
    resolver: zodResolver(recipeSchema),
    defaultValues,
  })

  const handleDelete = () => {
    // TODO: handle delete recipe
  }

  const onSubmit = async (values: z.infer<typeof recipeSchema>) => {
    const headers = { 'Content-Type': 'application/json' }
    const body: string = JSON.stringify({ ...values, id })

    try {
      await fetch('/api/recipe', {
        method: isAddMode ? 'POST' : 'PATCH',
        headers,
        body,
      })

      // go back to previous page after successful adding of recipe
      if (isAddMode) {
        router.back()
      } else {
        toast('Update successful', {
          description: 'Recipe has been successfully updated',
        })
        setTimeout(() => {
          router.push(PAGE_URL.HOME)
        }, 2000)
      }
    } catch (error) {
      console.error('Add Recipe error:', error)
    }
  }

  const formInputFields: FormInputType[] = [
    { name: 'author', label: 'Your Name', defaultValue: defaultValues.author },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      defaultValue: defaultValues.email,
    },
    {
      name: 'title',
      label: 'Title',
      defaultValue: defaultValues.title,
      disabled: !isAddMode,
    },
  ]

  const formTextAreaFields: FormInputType[] = [
    {
      name: 'description',
      label: 'Description',
      defaultValue: defaultValues.description,
    },
    {
      name: 'ingredients',
      label: 'Ingredients',
      defaultValue: defaultValues.ingredients,
      className: 'h-32',
    },
    {
      name: 'instructions',
      label: 'Instructions',
      defaultValue: defaultValues.instructions,
      className: 'h-32',
    },
  ]

  return (
    <div className="w-full pl-5 pr-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 h-screen overflow-y-scroll">
          {formInputFields.map((item: FormInputType) => (
            <FormInputField form={form} {...item} />
          ))}
          {formTextAreaFields.map((item: FormInputType) => (
            <FormTextAreaField form={form} {...item} />
          ))}
          <div className="flex justify-end gap-3 w-full">
            {!isAddMode && (
              <Button
                variant="destructive"
                onClick={handleDelete}
                className="recipe-button">
                Delete
              </Button>
            )}
            <Button className="recipe-button bg-[#435490]" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default RecipeForm
