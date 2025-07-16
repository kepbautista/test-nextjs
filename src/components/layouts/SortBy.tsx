import { ReactNode } from 'react'
import SortCriteriaRadio from '../ui/radio-group/SortCriteriaRadio'
import SelectSort from '../ui/select/SelectSort'
import { Button } from '../ui/button'
import useRecipeStore from '@/state/useRecipeStore'

const SortBy: React.FC = (): ReactNode => {
  const setSortCriteria: SetSortCriteriaType = useRecipeStore(
    state => state.setSortCriteria,
  )
  const setSortMode: SetSortModeType = useRecipeStore(state => state.setSortMode)
  
  const handleReset = () => {
    setSortCriteria('title')
    setSortMode('asc')
  }

  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xl">Sort by</h3>
      <SortCriteriaRadio />
      <SelectSort />
      <Button onClick={handleReset} className="w-16 mt-2">
        Reset
      </Button>
    </div>
  )
}

export default SortBy
