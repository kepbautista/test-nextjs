import FavoritesCheckbox from '../ui/checkbox/FavoritesCheckbox'
import SelectSort from '../ui/select/SelectSort'

const Sidebar: React.FC = () => (
  <div className="flex flex-col gap-24 px-3 font-semibold w-1/4">
    <div className="flex flex-col gap-1">
      <h3 className="text-xl">Sort by Title</h3>
      <SelectSort />
    </div>

    <div>
      <h3 className="text-xl">Filter</h3>
      <FavoritesCheckbox />
    </div>
  </div>
)

export default Sidebar
