import { ReactNode } from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form'
import { Input } from '../input'
import { CircleCheckIcon, CircleXIcon } from 'lucide-react'

const FormInputField: React.FC<FormInputFieldProps> = ({
  form,
  name,
  label,
  type,
  error,
  disabled = false,
  isDirty,
}: FormInputFieldProps): ReactNode => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-xl uppercase font-normal">{label}</FormLabel>
        <FormControl>
          <div className="relative">
            <Input
              type={type}
              className="bg-white border border-gray-400 w-full"
              {...field}
              disabled={disabled}
            />
            {
              <div className="absolute top-1.5 right-1.5">
                {error ? (
                  <CircleXIcon fill="red" stroke="white" />
                ) : (
                  isDirty && <CircleCheckIcon fill="#3ad365" stroke="white" />
                )}
              </div>
            }
            <FormMessage />
          </div>
        </FormControl>
      </FormItem>
    )}
  />
)

export default FormInputField
