type OptionType = { label: string, value: string }
type CheckBoxItemType = OptionType & { onCheckedChanged: (newCheckedState: boolean) => void }

type SortModeType = 'asc' | 'desc'

