import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className='relative min-h-[80vh] flex items-center justify-center'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 z-0'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3")',
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-base-300/80 to-base-300/95 dark:from-base-300/90 dark:to-base-300/98' />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 z-10 text-center'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6 drop-shadow-lg'>
          Find Your Dream Property
        </h1>
        <p className='text-lg md:text-xl text-base-content/90 mb-8 max-w-2xl mx-auto'>
          Discover the perfect place to call home with our extensive collection of properties
        </p>
        <div className='max-w-4xl mx-auto mb-16'>
          <SearchBar />
        </div>

        {/* Quick stats */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto'>
          {[
            { label: 'Properties', value: '10,000+' },
            { label: 'Happy Clients', value: '5,000+' },
            { label: 'Cities', value: '100+' },
          ].map((stat) => (
            <div key={stat.label} className='bg-base-200/50 backdrop-blur-sm rounded-xl p-4 md:p-6'>
              <div className='text-xl md:text-2xl font-bold text-base-content mb-1'>
                {stat.value}
              </div>
              <div className='text-base-content/80 text-sm md:text-base'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
