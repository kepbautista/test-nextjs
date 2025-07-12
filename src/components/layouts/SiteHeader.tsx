import { ReactNode } from 'react'
import SearchBar from '../ui/input/SearchBar'
import { NextRouter, useRouter } from 'next/router'
import { PAGE_URL } from '@/lib/fixtures'

const SiteHeader: React.FC = (): ReactNode => {
  const { pathname } = useRouter()

  return (
    <div className='flex justify-end items-center bg-[#5469b4] p-8 w-full h-24'>
      { pathname === PAGE_URL.HOME && <SearchBar />}
    </div>
  )
}

export default SiteHeader
