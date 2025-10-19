import Link from 'next/link'
import { NavItems, UserDropdown } from './index';

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

        <UserDropdown />
      </div>
    </header>
  )
}

export default Header;