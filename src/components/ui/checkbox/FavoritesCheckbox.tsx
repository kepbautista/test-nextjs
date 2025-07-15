import { ReactNode, useState } from 'react'
import { Checkbox } from '../checkbox'
import { Label } from '../label'
import useRecipeStore from '@/state/useRecipeStore'
import { Button } from '../button'

const FavoritesCheckbox: React.FC = (): ReactNode => {
  const [checkedYes, setCheckedYes] = useState<boolean>(true)
  const [checkedNo, setCheckedNo] = useState<boolean>(true)

  const setDisplayFavorites: SetBooleanType = useRecipeStore(
    state => state.setDisplayFavorites,
  )
  const setDisplayNotFavories: SetBooleanType = useRecipeStore(
    state => state.setDisplayNotFavories,
  )

  const items: CheckBoxItemType[] = [
    {
      label: 'Yes',
      value: 'yes',
      onCheckedChanged: (newState: boolean) => { 
        setCheckedYes(newState)
        setDisplayFavorites(newState)
      },
      checked: checkedYes
    },
    {
      label: 'No',
      value: 'no',
      onCheckedChanged: (newState: boolean) => {
        setCheckedNo(newState)
        setDisplayNotFavories(newState)
      },
      checked: checkedNo
    },
  ]

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setDisplayFavorites(true)
    setDisplayNotFavories(true)
    setCheckedYes(true)
    setCheckedNo(true)
  }

  return (
    <div className="text-[#616161] bg-white rounded-sm border border-black p-4">
      <h5 className="font-semibold">Favorites?</h5>
      <form className="flex flex-col gap-3 p-4">
        {items.map((item: CheckBoxItemType) => (
          <div key={item.value} className="flex gap-2">
            <Checkbox
              onCheckedChange={item.onCheckedChanged}
              value={item.value}
              checked={item.checked}
            />
            <Label>{item.label}</Label>
          </div>
        ))}
        <div className='flex justify-center w-full'>
          <Button onClick={handleReset} className='w-1/2'>Reset</Button>
        </div>
      </form>
    </div>
  )
}

export default FavoritesCheckbox
