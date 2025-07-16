import FavoritesCheckbox from '../ui/checkbox/FavoritesCheckbox'
import SortBy from './SortBy'

const Sidebar: React.FC = () => (
  <div className="flex flex-col gap-24 px-3 font-semibold w-1/4">
    <SortBy />

    <div className='pr-12'>
      <h3 className="text-xl pb-2">Filter</h3>
      <FavoritesCheckbox />
    </div>
  </div>
)

export default Sidebar
