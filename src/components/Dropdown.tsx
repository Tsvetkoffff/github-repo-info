import {FC} from 'react'
import {IUser} from '../models/models'

interface DropdownProps {
  users: IUser[] | undefined
  onClick: (login: string) => void
}

const Dropdown: FC<DropdownProps> = ({users, onClick}) => (
  <ul className='absolute top-[82px] left-0 right-0 max-h-[200px] shadow-md rounded-b-xl list-none overflow-y-scroll bg-white'>
    {users?.map(user => (
      <li
        key={user.id}
        onClick={() => onClick(user.login)}
        className='hover:bg-slate-400 p-2 cursor-pointer'>
        {user.login}
      </li>
    ))}
  </ul>
)

export default Dropdown
