import { ReactNode } from "react"
import { Button } from "../button"
import { Star } from "lucide-react"

interface ISetFavoriteButtonProps {
  isFavorite: boolean
  handleClick: () => void
}

const SetFavoriteButton: React.FC<ISetFavoriteButtonProps> = ({isFavorite, handleClick}): ReactNode => (
  <Button 
    onClick={handleClick}
    className="absolute top-0 right-0 z-10 w-10 h-10">
      {
        isFavorite ? <Star fill='yellow' size={40}/> : <Star stroke='yellow' size={40}/>
      }
  </Button>
)

export default SetFavoriteButton
