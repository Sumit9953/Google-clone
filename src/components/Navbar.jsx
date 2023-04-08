import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center  space-x-5 w-screen '>
            <Link to="/">
                <h1 className='text-2xl font-bold dark:text-white py-1 px-2 text-black '>Google</h1>
            </Link>
            <button className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg' onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? 'Light 🌞' : 'Dark 🌙'}
            </button>
        </div>
        <Search />
    </div>
  )
}

