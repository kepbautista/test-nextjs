import { ReactNode } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form'
import { Textarea } from '../textarea'
import clsx from 'clsx'

const FormTextAreaField: React.FC<FormInputFieldProps> = ({form, name, label, defaultValue, className}): ReactNode => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xl uppercase font-normal pb-5">{label}</FormLabel>
        <FormControl>
          <Textarea className={clsx('bg-white border border-gray-400 w-full', className)} {...field} value={defaultValue} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default FormTextAreaField
