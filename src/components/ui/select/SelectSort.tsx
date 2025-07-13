import { ReactNode } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select'

const SelectSort: React.FC = (): ReactNode => (
  <Select>
    <SelectTrigger className='w-80'>
      <SelectValue placeholder='Select' />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value='asc'>ASC</SelectItem>
      <SelectItem value='desc'>DESC</SelectItem>
    </SelectContent>
  </Select>
)

export default SelectSort
