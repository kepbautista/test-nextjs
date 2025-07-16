import { Search, X } from 'lucide-react'
import { Input } from '../input'
import useRecipeStore from '@/state/useRecipeStore'
import { Button } from '../button'
import { ReactNode } from 'react'

interface IXButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const XButton: React.FC<IXButtonProps> = ({handleClick}: IXButtonProps): ReactNode => (
  <Button type='reset' variant='plain' onClick={handleClick}>
    <X />
  </Button>
)

const SearchBar: React.FC = (): ReactNode => {
  const searchString: string = useRecipeStore(state => state.searchString)
  const setSearchString: SetSearchStringType = useRecipeStore(state => state.setSearchString)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value)
  }

  const handleClear = () => {
    setSearchString('')
  }

  return (
    <form onReset={handleClear} className="flex items-center bg-gray-300 w-96 pr-2 rounded-lg">
      <Input type="text" placeholder="Search here..." onChange={handleSearch} value={searchString} />
      { searchString.length > 0 && <XButton handleClick={handleClear} />}
      <Search />
    </form>
  )
}

export default SearchBar
