import { Link } from 'react-router-dom';
import { Heart, Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const token = localStorage.getItem('token');

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/properties', label: 'Properties' },
    { to: '/aboutus', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className='sticky top-0 z-50 bg-base-100/80 backdrop-blur-lg border-b border-base-200'>
      <div className='navbar container mx-auto px-4'>
        <div className='navbar-start'>
          <Link to='/' className='text-2xl font-bold text-primary hover:text-primary-focus transition-colors'>
            NestFinder
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-2'>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className='text-base-content hover:text-primary rounded-lg'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='navbar-end gap-2'>
          <button
            className='btn btn-ghost btn-circle text-base-content hover:text-primary'
            aria-label='Favorites'
          >
            <Heart className='h-5 w-5' />
          </button>

          <button
            className='btn btn-ghost btn-circle text-base-content hover:text-primary'
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            {theme === 'light' ? <Moon className='h-5 w-5' /> : <Sun className='h-5 w-5' />}
          </button>

          {token &&<Link
            to='/new-property'
            className='btn btn-primary hidden md:flex'
          >
            New Property
          </Link>}

          {!token &&<Link
            to='/register'
            className='btn btn-primary hidden md:flex'
          >
            Register
          </Link>}

          {!token &&<Link
            to='/login'
            className='btn btn-primary hidden md:flex'
          >
            Login
          </Link>}

          {/* Mobile Menu Button */}
          <button
            className='btn btn-ghost btn-circle lg:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='lg:hidden bg-base-100 border-t border-base-200'>
          <nav className='container mx-auto px-4 py-4'>
            <ul className='menu gap-2'>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className='text-base-content hover:text-primary'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {token && <li>
                <Link
                  to='/new-property'
                  className='btn btn-primary w-full mt-2'
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Property
                </Link>
              </li>}
              {!token && <>
                <li>
                  <Link
                    to='/register'
                    className='btn btn-primary w-full mt-2'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to='/login'
                    className='btn btn-primary w-full mt-2'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              </>}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
