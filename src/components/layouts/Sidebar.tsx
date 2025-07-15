import FavoritesCheckbox from '../ui/checkbox/FavoritesCheckbox'
import SortCriteriaRadio from '../ui/radio-group/SortCriteriaRadio'
import SelectSort from '../ui/select/SelectSort'

const Sidebar: React.FC = () => (
  <div className="flex flex-col gap-24 px-3 font-semibold w-1/4">
    <div className="flex flex-col gap-1">
      <h3 className="text-xl">Sort by</h3>
      <SortCriteriaRadio />
      <SelectSort />
    </div>

    <div className='pr-12'>
      <h3 className="text-xl">Filter</h3>
      <FavoritesCheckbox />
    </div>
  </div>
)

export default Sidebar
