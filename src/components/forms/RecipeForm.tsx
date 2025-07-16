import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { recipeSchema } from '@/validators/recipeSchema'
import FormInputField from '../ui/input/FormInputField'
import FormTextAreaField from '../ui/input/FormTextAreaField'
import { NextRouter, useRouter } from 'next/router'
import { ChangeEvent, ReactNode, useRef, useState } from 'react'
import { headers, PAGE_URL } from '@/lib/fixtures'
import { toast } from 'sonner'
import BackButton from '../ui/button/BackButton'
import Image from 'next/image'

import PlaceholderIcon from '@/public/placeholder.svg'

type RecipeFormProps = {
  id?: string
  isAddMode?: boolean
  defaultValues: RecipeInputType
  imageUrl?: string
}

const RecipeForm: React.FC<RecipeFormProps> = ({
  defaultValues,
  isAddMode = false,
  id,
  imageUrl,
}: RecipeFormProps): ReactNode => {
  const router: NextRouter = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreview, setImagePreview] = useState<string>('')

  const form = useForm<z.infer<typeof recipeSchema>>({
    resolver: zodResolver(recipeSchema),
    defaultValues,
  })
  const { setValue } = form

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    try {
      await fetch(`/api/recipe/remove/${id}`, { method: 'DELETE', headers })
      setTimeout(() => {
        router.push(PAGE_URL.HOME)
      }, 2000)
    } catch (error) {
      console.error(`Delete Recipe error:`, error)
    }
  }

  const onSubmit = async (values: z.infer<typeof recipeSchema>) => {
    const formData = new FormData()

    formData.append('author', values.author)
    formData.append('email', values.email)
    formData.append('title', values.title)
    formData.append('description', values.description)
    formData.append('ingredients', values.ingredients)
    formData.append('instructions', values.instructions)

    if (isAddMode) {
      formData.append('imageFile', values.imageFile)
    }

    if (id && !isAddMode) {
      formData.append('id', id)
    }

    try {
      const response = await fetch('/api/recipe', {
        method: isAddMode ? 'POST' : 'PATCH',
        body: formData,
      })

      if (isAddMode) {
        if (response.status === 200) {
          // go back to previous page after successful adding of recipe
          router.back()
        } else if (response.status === 400) {
          toast('Add recipe failed', {
            description: 'Recipe title already exists.',
          })
        }
      } else if(response.status === 200) {
        toast('Update successful', {
          description: 'Recipe has been successfully updated',
        })
        setTimeout(() => {
          router.push(PAGE_URL.HOME)
        }, 2000)
      }
    } catch (error) {
      console.error(`${isAddMode ? 'Add' : 'Update'} Recipe error:`, error)
    }
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    fileInputRef?.current?.click()
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files) {
      const selectedFile = event.target.files[0]
      setImagePreview(URL.createObjectURL(selectedFile))
      setValue('imageFile', selectedFile)
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
    <Form {...form}>
      <form className="flex gap-10" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="form-side-bar">
          <BackButton />
          {isAddMode ? (
            <>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <Button
                asChild
                variant="plain"
                className="w-fit h-fit max-w-[450px] max-h-[400px]"
                onClick={handleButtonClick}>
                <Image
                  src={imagePreview ? imagePreview : PlaceholderIcon}
                  alt=""
                  width={450}
                  height={400}
                />
              </Button>
            </>
          ) : (
            imageUrl && <Image src={imageUrl} width={450} height={400} alt="" />
          )}
        </div>
        <div className="w-full pl-5 pr-20">
          <div className="space-y-8 h-screen overflow-y-scroll">
            {formInputFields.map((item: FormInputType) => (
              <FormInputField key={item.name} form={form} {...item} />
            ))}
            {formTextAreaFields.map((item: FormInputType) => (
              <FormTextAreaField key={item.name} form={form} {...item} />
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
          </div>
        </div>
      </form>
    </Form>
  )
}

export default RecipeForm
