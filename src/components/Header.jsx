import { Link } from 'react-router-dom';
import { Heart, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className='sticky top-0 z-50 bg-base-100 shadow-sm'>
      <div className='navbar container mx-auto px-4'>
        <div className='navbar-start'>
          <Link to='/' className='text-2xl font-bold text-primary'>
            NestFinder
          </Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-2'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/properties'>Properties</Link>
            </li>
            <li>
              <Link to='/aboutus'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        <div className='navbar-end gap-2'>
          <button className='btn btn-ghost btn-circle'>
            <Heart className='h-5 w-5' />
          </button>
          <button className='btn btn-ghost btn-circle' onClick={toggleTheme}>
            {theme === 'light' ? <Moon className='h-5 w-5' /> : <Sun className='h-5 w-5' />}
          </button>
          <button className='btn btn-primary'>List Property</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
