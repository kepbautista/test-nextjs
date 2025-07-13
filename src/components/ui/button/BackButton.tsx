import { ReactNode } from 'react'
import { Button } from '../button'
import { ChevronLeft } from 'lucide-react'
import { NextRouter, useRouter } from 'next/router'

const BackButton: React.FC = (): ReactNode => {
  const router: NextRouter = useRouter()

  return (
    <Button
      variant='plain'
      onClick={() => router.back()}
      className='flex gap-3'>
      <ChevronLeft size={26} />
      <h3 className='text-xl font-normal'>Back</h3>
    </Button>
  )
}

export default BackButton
