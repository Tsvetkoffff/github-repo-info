import {useState, useEffect} from 'react'
import {useSearchUsersQuery} from '../store/github/github.api'
import {useSuspend} from './../hooks/suspend'
import Error from '../components/Error'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const suspended = useSuspend(search)
  const [dropdown, setDropdown] = useState(false)
  const {isLoading, isError, data} = useSearchUsersQuery(suspended, {
    skip: suspended.length < 3,
  })

  useEffect(() => {
    setDropdown(suspended.length >= 3 && data?.length! > 0)
  }, [suspended, data])

  return (
    <div className=' flex flex-col items-center mx-auto pt-10 '>
      {isError && <Error />}
      <div className=' relative w-full sm:w-[615px] flex flex-col justify-center '>
        <input
          type='text'
          className=' h-[42px] w-full p-2 border border-slate-500'
          placeholder='Search GitHub users here...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {isLoading && (
          <p className=' absolute top-[44px] left-0 right-0 text-center p-6'>
            Loading...
          </p>
        )}
        {dropdown && (
          <ul className=' absolute top-[44px] left-0 right-0 max-h-[200px] shadow-md rounded-b-xl list-none overflow-y-scroll '>
            {data?.map(item => (
              <li
                key={item.id}
                className='hover:bg-slate-400 p-2 cursor-pointer'
              >
                {item.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default HomePage
