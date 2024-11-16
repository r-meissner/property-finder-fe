import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className='h-5 w-5' />, label: 'Facebook' },
    { icon: <Twitter className='h-5 w-5' />, label: 'Twitter' },
    { icon: <Instagram className='h-5 w-5' />, label: 'Instagram' },
    { icon: <Linkedin className='h-5 w-5' />, label: 'LinkedIn' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/properties', label: 'Properties' },
    { to: '/aboutus', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const propertyTypes = [
    { to: '/properties?type=house', label: 'Houses' },
    { to: '/properties?type=apartment', label: 'Apartments' },
    { to: '/properties?type=land', label: 'Land' },
    { to: '/properties?type=commercial', label: 'Commercial' },
  ];

  return (
    <footer className='bg-base-200 border-t border-base-300'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <Link to='/' className='text-2xl font-bold text-primary hover:text-primary-focus transition-colors'>
              NestFinder
            </Link>
            <p className='text-base-content/70'>
              Finding your perfect property has never been easier
            </p>
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className='btn btn-ghost btn-circle text-base-content hover:text-primary'
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='footer-title text-base-content mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className='link link-hover text-base-content/70 hover:text-primary'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className='footer-title text-base-content mb-4'>Property Types</h3>
            <ul className='space-y-2'>
              {propertyTypes.map((type) => (
                <li key={type.to}>
                  <Link
                    to={type.to}
                    className='link link-hover text-base-content/70 hover:text-primary'
                  >
                    {type.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='footer-title text-base-content mb-4'>Contact Info</h3>
            <ul className='space-y-4'>
              <li className='flex items-center gap-2 text-base-content/70'>
                <MapPin className='h-5 w-5 text-primary' />
                <span>123 Real Estate Street<br />Property City, PC 12345</span>
              </li>
              <li className='flex items-center gap-2 text-base-content/70'>
                <Phone className='h-5 w-5 text-primary' />
                <span>(+49) 2245-678-90</span>
              </li>
              <li className='flex items-center gap-2 text-base-content/70'>
                <Mail className='h-5 w-5 text-primary' />
                <span>info@nestfinder.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='divider my-8'></div>

        <div className='text-center text-base-content/70'>
          <p>© {new Date().getFullYear()} NestFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
