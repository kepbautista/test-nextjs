import { ReactNode } from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form'
import { Input } from '../input'

// TODO: modify textfields during errors
const FormInputField: React.FC<FormInputFieldProps> = ({
  form,
  name,
  label,
  type,
  defaultValue,
  disabled = false,
}: FormInputFieldProps): ReactNode => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xl uppercase font-normal">{label}</FormLabel>
        <FormControl>
          <Input
            type={type}
            className="bg-white border border-gray-400 w-full"
            {...field}
            defaultValue={defaultValue}
            disabled={disabled}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormInputField
