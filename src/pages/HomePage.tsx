import {useState, useEffect} from 'react'

import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from '../store/github/github.api'

import {useDebounce} from '../hooks/debounce'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Search from '../components/Search'
import Dropdown from '../components/Dropdown'
import Card from '../components/Card'

const HomePage = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(search)

  const {
    isLoading: areUsersLoading,
    isError: areUsersError,
    data: users,
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  })

  const [
    fetchUserRepos,
    {isLoading: areReposLoading, isError: areReposError, data: repos},
  ] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(debounced.length >= 3 && users?.length! > 0)
  }, [debounced, users])

  const userLoginClickHandler = (login: string) => {
    fetchUserRepos(login)
    setDropdown(false)
  }

  return (
    <>
      {areUsersError && <Error />}

      <div className='relative w-full sm:w-[615px] flex flex-col justify-center items-center mx-auto pt-10'>
        <Search
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {areUsersLoading && (
          <Loader className='absolute top-[82px] left-0 right-0' />
        )}

        {dropdown && (
          <Dropdown
            users={users}
            onClick={userLoginClickHandler}
          />
        )}
      </div>

      <div>
        {areReposError && <Error />}

        {areReposLoading ? (
          <Loader />
        ) : (
          repos?.map(repo => <Card repo={repo} />)
        )}
      </div>
    </>
  )
}

export default HomePage
