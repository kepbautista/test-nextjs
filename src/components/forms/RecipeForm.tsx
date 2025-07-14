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

const RecipeForm = () => {
  const form = useForm<z.infer<typeof recipeSchema>>({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      author: '',
      email: '',
      title: '',
      description: '',
      ingredients: '',
      instruction: ''
    },
  })

  const onSubmit = (values: z.infer<typeof recipeSchema>) => {
    console.log(values)
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
