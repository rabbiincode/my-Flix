import {BellIcon, SearchIcon} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const {logout} = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0){
        setIsScrolled(true)
      } else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img src="https://rb.gy/ulxxee" alt="img" width={100} height={100} className="cursor-pointer object-contain"/>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light cursor-pointer'>
        <SearchIcon className='hidden h-6 w-6 sm:inline'/>
        <p className='hidden font-bold lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6'/>
        
        <img src="https://rb.gy/g1pwyx" alt="img" className='rounded' onClick={logout}/>
      </div>
    </header>
  )
}

export default Header