import { Search } from "lucide-react"
import { Input } from "../input"

const SearchBar: React.FC = () => {

  return (
    <form className="flex items-center bg-gray-300 w-96 pr-2 rounded-lg">
      <Input type='text' placeholder="Search here..." />
      <Search />
    </form>
  )
}

export default SearchBar
