type FormInputType = {
  name: string
  label: string
  type?: string
  className?: string
}

type FormInputFieldProps =  FormInputType & {
  form: UseFormReturn
}
