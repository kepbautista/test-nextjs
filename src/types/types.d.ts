type OptionType = { label: string; value: string }
type CheckBoxItemType = OptionType & {
  checked: boolean
  onCheckedChanged: (newCheckedState: boolean) => void
}

type SortModeType = 'asc' | 'desc'
