import { ReactNode } from 'react'
import { Checkbox } from '../checkbox'
import { Label } from '../label'
import useRecipeStore from '@/state/useRecipeStore'

const FavoritesCheckbox: React.FC = (): ReactNode => {
  const setDisplayFavorites: SetBooleanType = useRecipeStore(state => state.setDisplayFavorites)
  const setDisplayNotFavories: SetBooleanType = useRecipeStore(state => state.setDisplayNotFavories)

  const items: CheckBoxItemType[] = [
    {
      label: 'Yes',
      value: 'yes',
      onCheckedChanged: (newState: boolean) => setDisplayFavorites(newState),
    },
    {
      label: 'No',
      value: 'no',
      onCheckedChanged: (newState: boolean) => setDisplayNotFavories(newState),
    },
  ]

  return (
    <div className="text-[#616161] bg-white rounded-sm border border-black p-4">
      <h5 className="font-semibold">Favorites?</h5>
      <form className="flex flex-col gap-3 p-4">
        {items.map((item: CheckBoxItemType) => (
          <div key={item.value} className="flex gap-2">
            <Checkbox
              defaultChecked={true}
              onCheckedChange={item.onCheckedChanged}
              value={item.value}
            />
            <Label>{item.label}</Label>
          </div>
        ))}
      </form>
    </div>
  )
}

export default FavoritesCheckbox
