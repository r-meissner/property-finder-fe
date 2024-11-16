import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-base-200'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-primary'>NestFinder</h2>
            <p className='text-base-content/70'>
              Finding your perfect property has never been easier
            </p>
            <div className='flex gap-4'>
              <button className='btn btn-ghost btn-circle'><Facebook className='h-5 w-5' /></button>
              <button className='btn btn-ghost btn-circle'><Twitter className='h-5 w-5' /></button>
              <button className='btn btn-ghost btn-circle'><Instagram className='h-5 w-5' /></button>
              <button className='btn btn-ghost btn-circle'><Linkedin className='h-5 w-5' /></button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='footer-title'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a className='link link-hover'>Home</a></li>
              <li><a className='link link-hover'>Properties</a></li>
              <li><a className='link link-hover'>About Us</a></li>
              <li><a className='link link-hover'>Contact</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className='footer-title'>Property Types</h3>
            <ul className='space-y-2'>
              <li><a className='link link-hover'>Houses</a></li>
              <li><a className='link link-hover'>Apartments</a></li>
              <li><a className='link link-hover'>Land</a></li>
              <li><a className='link link-hover'>Commercial</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='footer-title'>Contact Info</h3>
            <ul className='space-y-2'>
              <li>123 Real Estate Street</li>
              <li>Property City, PC 12345</li>
              <li>Phone: (+49) 2245-678-90</li>
              <li>Email: info@nestfinder.com</li>
            </ul>
          </div>
        </div>

        <div className='divider my-8'></div>

        <div className='text-center text-base-content/70'>
          <p>© 2024 NestFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
