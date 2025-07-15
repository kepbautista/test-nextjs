type SortCriteriaType = 'title' | 'date' | 'author'
type SortModeType = 'asc' | 'desc'

type OptionType = { label: string; value: string }
type CheckBoxItemType = OptionType & {
  checked: boolean
  onCheckedChanged: (newCheckedState: boolean) => void
}
