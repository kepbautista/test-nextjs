import { ReactNode } from 'react'
import { Checkbox } from '../checkbox'
import { Label } from '../label'

const FavoritesCheckbox: React.FC = (): ReactNode => {
  const items: OptionType[] = [
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'}
  ]

  return (
    <div className="text-[#616161] bg-white rounded-2xl border border-black p-4">
      <h5 className="font-semibold">Favorites?</h5>
      <form className='flex flex-col gap-3 p-4'>
        {
          items.map((item: OptionType) => (
            <div className='flex gap-2'>
              <Checkbox onCheckedChange={() => console.log(`clicked ${item.label}`) } value={item.value} />
              <Label>{item.label}</Label>
            </div>
          ))
        }
      </form>
    </div>
  )
}

export default FavoritesCheckbox
