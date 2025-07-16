import { ReactNode } from 'react'
import { RadioGroup, RadioGroupItem } from '../radio-group'
import { Label } from '../label'
import useRecipeStore from '@/state/useRecipeStore'
import { SORT_CRITERIA_LABEL, SORT_CRITERIA_VALUE } from '@/lib/fixtures'

const SortCriteriaRadio: React.FC = (): ReactNode => {
  const sortCriteria: SortCriteriaType = useRecipeStore(state => state.sortCriteria)
  const setSortCriteria: SetSortCriteriaType = useRecipeStore(
    state => state.setSortCriteria,
  )

  const options: OptionType[] = [
    { label: SORT_CRITERIA_LABEL.TITLE, value: SORT_CRITERIA_VALUE.TITLE },
    { label: SORT_CRITERIA_LABEL.DATE, value: SORT_CRITERIA_VALUE.DATE },
    { label: SORT_CRITERIA_LABEL.AUTHOR, value: SORT_CRITERIA_VALUE.AUTHOR },
  ]

  const getSortCriteria = (value: string): SortCriteriaType => {
    switch (value) {
      case SORT_CRITERIA_VALUE.AUTHOR:
        return 'author'
      case SORT_CRITERIA_VALUE.DATE:
        return 'date'
      default:
        return 'title'
    }
  }

  const handleChange = (value: string) => {
    setSortCriteria(getSortCriteria(value))
  }

  return (
    <RadioGroup
      value={sortCriteria}
      className="p-4 pt-2"
      onValueChange={handleChange}>
      {options.map((item: OptionType) => (
        <div key={item.value} className="flex items-center space-x-2">
          <RadioGroupItem
            className="bg-white"
            value={item.value}
            id={item.value}
          />
          <Label htmlFor={item.value}>{item.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default SortCriteriaRadio
