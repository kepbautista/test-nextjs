import { ReactNode } from 'react'
import SearchBar from '../ui/input/SearchBar'

const SiteHeader: React.FC = (): ReactNode => (
  <div className='flex justify-end items-center bg-[#5469b4] p-8 w-full h-24'>
    <SearchBar />
  </div>
)

export default SiteHeader
