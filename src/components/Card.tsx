import {FC, HTMLAttributes, Attributes} from 'react'
import {IRepo} from '../models/models'

interface CardProps extends HTMLAttributes<HTMLElement> {
  repo: IRepo
}

const Card: FC<CardProps> = ({repo}) => (
  <div>
    <p>{repo.url}</p>
    <button className='border p-2'>Add to favorites</button>
  </div>
)

export default Card
