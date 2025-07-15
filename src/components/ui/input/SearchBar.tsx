import { Search } from 'lucide-react'
import { Input } from '../input'
import useRecipeStore from '@/state/useRecipeStore'

const SearchBar: React.FC = () => {
  const setSearchString: SetSearchStringType = useRecipeStore(state => state.setSearchString)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value.trim())
  }

  return (
    <form className="flex items-center bg-gray-300 w-96 pr-2 rounded-lg">
      <Input type="text" placeholder="Search here..." onChange={handleSearch} />
      <Search />
    </form>
  )
}

export default SearchBar
