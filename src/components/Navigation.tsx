import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navigation = () => {
  const activePage = useLocation().pathname

  return (
    <nav className=' flex justify-between items-center px-5 h-[50px] bg-primary text-gray-300 '>
      <h3>GitHub Repo`s Search</h3>
      <ul className=' flex ml-6 '>
        <li
          className={` hover:text-gray-100 transition-colors
          ${activePage === '/' && 'text-gray-100'}`}
        >
          <Link to={'/'}> Home </Link>
        </li>
        <li
          className={` ml-6 hover:text-gray-100 transition-colors
          ${activePage === '/favorites' && 'text-gray-100'}`}
        >
          <Link to={'/favorites'}> Favorites </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
