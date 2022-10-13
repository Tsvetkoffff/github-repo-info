import {useState, useEffect} from 'react'
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from '../store/github/github.api'
import {useSuspend} from './../hooks/suspend'
import Error from '../components/Error'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const suspended = useSuspend(search)
  const [dropdown, setDropdown] = useState(false)

  const {
    isLoading: areUsersLoading,
    isError: areUsersError,
    data: users,
  } = useSearchUsersQuery(suspended, {
    skip: suspended.length < 3,
  })

  const [
    fetchUserRepos,
    {isLoading: areReposLoading, isError: areReposError, data: repos},
  ] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(suspended.length >= 3 && users?.length! > 0)
  }, [suspended, users])

  const userLoginClickHandler = (login: string) => {
    return () => {
      fetchUserRepos(login)
      setDropdown(false)
    }
  }

  return (
    <>
      <div className=' flex flex-col items-center mx-auto pt-10 '>
        {areUsersError && <Error />}
        <div className=' relative w-full sm:w-[615px] flex flex-col justify-center '>
          <input
            type='text'
            className=' h-[42px] w-full p-2 border border-slate-500'
            placeholder='Search GitHub users here...'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {areUsersLoading && (
            <p className=' absolute top-[44px] left-0 right-0 text-center p-6'>
              Loading...
            </p>
          )}
          {dropdown && (
            <ul className=' absolute top-[44px] left-0 right-0 max-h-[200px] shadow-md rounded-b-xl list-none overflow-y-scroll bg-white'>
              {users?.map(user => (
                <li
                  key={user.id}
                  onClick={userLoginClickHandler(user.login)}
                  className='hover:bg-slate-400 p-2 cursor-pointer'
                >
                  {user.login}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        {areReposError && <Error />}
        {areReposLoading && <p>Loading...</p>}
        {repos?.map(repo => (
          <div key={repo.id}>
            <p>{repo.url}</p>
            <button className='border p-2'>Add to favorites</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage
