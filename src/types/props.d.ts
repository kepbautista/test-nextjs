type FormInputType = {
  name: string
  label: string
  defaultValue?: string
  disabled?: boolean
  type?: string
  className?: string
}

type FormInputFieldProps =  FormInputType & {
  form: UseFormReturn
}
