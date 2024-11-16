import React from 'react';
import Hero from '../components/Hero';
import Map from '../components/Map';

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Search */}
      <Hero />

      {/* Featured Properties Map Section */}
      <section className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-base-content mb-4'>
            Discover Properties Near You
          </h2>
          <p className='text-base-content/70 max-w-2xl mx-auto'>
            Explore available properties in your area. Click on markers to see property details and find your perfect match.
          </p>
        </div>

        <Map size='large' />
      </section>
    </div>
  );
};

export default HomePage;
