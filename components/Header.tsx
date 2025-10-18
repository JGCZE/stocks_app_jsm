import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href="/">
          X - replace with logo
        </Link>

        <nav className='hidden sm:block'>
          <NavItems />
        </nav>

        {/* USer dropdown */}
      </div>
    </header>
  )
}

export default Header