import {FC, InputHTMLAttributes} from 'react'

const Search: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange,
}) => (
  <input
    type='text'
    className='h-[42px] w-full p-2 border border-slate-500'
    placeholder='Search GitHub users here...'
    value={value}
    onChange={onChange}
  />
)

export default Search
