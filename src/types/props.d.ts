type FormInputType = {
  name: string
  label: string
  defaultValue?: string
  disabled?: boolean
  type?: string
  className?: string
  error?: string
  isDirty: boolean
}

type FormInputFieldProps =  FormInputType & {
  form: UseFormReturn
}
