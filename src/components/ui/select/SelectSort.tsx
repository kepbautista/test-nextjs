import { ReactNode } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select'
import useRecipeStore from '@/state/useRecipeStore'

const SelectSort: React.FC = (): ReactNode => {
  const sortMode: SortModeType = useRecipeStore(state => state.sortMode)
  const setSortMode: SetSortModeType = useRecipeStore(state => state.setSortMode)

  const handleChange = (value: SortModeType) => {
    setSortMode(value)
  } 
  
  return (
  <Select onValueChange={handleChange} value={sortMode}>
    <SelectTrigger className="w-80 bg-white">
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="asc">ASC</SelectItem>
      <SelectItem value="desc">DESC</SelectItem>
    </SelectContent>
  </Select>
)}

export default SelectSort
