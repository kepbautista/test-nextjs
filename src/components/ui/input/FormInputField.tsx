import { ReactNode } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { Input } from '../input'

const FormInputField: React.FC<FormInputFieldProps> = ({form, name, label, type}: FormInputFieldProps): ReactNode => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xl uppercase font-normal">{label}</FormLabel>
        <FormControl>
          <Input type={type} className='bg-white border border-gray-400 w-full' {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormInputField
