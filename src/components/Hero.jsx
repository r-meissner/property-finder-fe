import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className='relative min-h-[600px] flex items-center justify-center'>
      {/* background image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* content */}
      <div className='container mx-auto px-4 z-10 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          Find Your Dream Property
        </h1>
        <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
          Discover the perfect place to call home with our extensive collection of properties
        </p>
        <SearchBar />

        {/* quick stats */}
        <div className='grid grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto'>
          {[
            { label: 'Properties', value: '10,000+' },
            { label: 'Happy Clients', value: '5,000+' },
            { label: 'Cities', value: '100+' },
          ].map((stat) => (
            <div key={stat.label} className='bg-white/10 backdrop-blur-sm rounded-lg p-4'>
              <div className='text-2xl font-bold text-white'>{stat.value}</div>
              <div className='text-white/80'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
