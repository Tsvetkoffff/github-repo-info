import {FC, HTMLAttributes} from 'react'
import {Link, useLocation} from 'react-router-dom'
import Container from './Container'

const Navigation: FC<HTMLAttributes<HTMLElement>> = () => {
  const activePage = useLocation().pathname

  return (
    <nav className=' min-w-[320px] bg-primary text-gray-300 '>
      <Container>
        <div className='flex justify-between items-center h-[50px]'>
          <h3>GitHub Search</h3>
          <ul className=' flex ml-6 '>
            <li
              className={` hover:text-gray-100 transition-colors
          ${
            activePage === '/' && 'text-gray-100 underline underline-offset-4'
          }`}>
              <Link to={'/'}> Home </Link>
            </li>
            <li
              className={` ml-6 hover:text-gray-100 transition-colors
          ${
            activePage === '/favorites' &&
            'text-gray-100 underline underline-offset-4'
          }`}>
              <Link to={'/favorites'}> Favorites </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation
