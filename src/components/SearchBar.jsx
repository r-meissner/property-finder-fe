import { Search, MapPin, Home, DollarSign, ArrowDownUp, X } from 'lucide-react';
import { useState } from 'react';

const SearchBar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const quickFilters = [
    { id: 'forSale', label: 'For Sale' },
    { id: 'forRent', label: 'For Rent' },
    { id: 'furnished', label: 'Furnished' },
    { id: 'petFriendly', label: 'Pet Friendly' },
    { id: 'newBuild', label: 'New Build' },
    { id: 'garden', label: 'Garden' },
  ];

  const toggleFilter = (filterId) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId],
    );
  };

  return (
    <div className='w-full'>
      <div className='bg-base-100 rounded-2xl shadow-xl p-3 md:p-4'>
        {/* Main Search Controls */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
          {/* Location */}
          <div className='form-control'>
            <div className='input input-bordered bg-base-100 flex items-center gap-2 hover:border-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors'>
              <MapPin className='h-5 w-5 text-primary shrink-0' />
              <input
                type='text'
                placeholder='Location'
                className='w-full bg-transparent focus:outline-none text-base-content placeholder:text-base-content/60'
              />
            </div>
          </div>

          {/* Property Type */}
          <div className='form-control'>
            <div className='input input-bordered bg-base-100 flex items-center gap-2 hover:border-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors'>
              <Home className='h-5 w-5 text-primary shrink-0' />
              <select className='w-full bg-transparent focus:outline-none text-base-content placeholder:text-base-content/60 appearance-none cursor-pointer'>
                <option value=''>Property Type</option>
                <option value='house'>House</option>
                <option value='apartment'>Apartment</option>
                <option value='land'>Land</option>
                <option value='commercial'>Commercial</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className='form-control'>
            <div className='input input-bordered bg-base-100 flex items-center gap-2 hover:border-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-colors'>
              <DollarSign className='h-5 w-5 text-primary shrink-0' />
              <select className='w-full bg-transparent focus:outline-none text-base-content placeholder:text-base-content/60 appearance-none cursor-pointer'>
                <option value=''>Price Range</option>
                <option value='0-100000'>$0 - $100,000</option>
                <option value='100000-300000'>$100,000 - $300,000</option>
                <option value='300000-500000'>$300,000 - $500,000</option>
                <option value='500000+'>$500,000+</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button className='btn btn-primary w-full'>
            <Search className='h-5 w-5' />
            Search
          </button>
        </div>

        {/* Advanced Filters Section */}
        <div className='mt-4 flex flex-wrap items-center gap-3'>
          <button
            className={`btn btn-sm gap-2 ${showFilters ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <X className='h-4 w-4' /> : <ArrowDownUp className='h-4 w-4' />}
            {showFilters ? 'Hide Filters' : 'More Filters'}
          </button>

          {/* Quick Filter Pills */}
          <div className='flex flex-wrap gap-2'>
            {quickFilters.map((filter) => (
              <button
                key={filter.id}
                className={`badge badge-lg ${
                  selectedFilters.includes(filter.id)
                    ? 'badge-primary text-primary-content'
                    : 'badge-outline hover:badge-primary'
                } cursor-pointer transition-colors`}
                onClick={() => toggleFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Extended Filters Panel */}
        {showFilters && (
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 border-t border-base-200'>
            {/* Bedrooms */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text text-base-content/70'>Bedrooms</span>
              </label>
              <select className='select select-bordered w-full'>
                <option value=''>Any</option>
                <option value='1'>1+</option>
                <option value='2'>2+</option>
                <option value='3'>3+</option>
                <option value='4'>4+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text text-base-content/70'>Bathrooms</span>
              </label>
              <select className='select select-bordered w-full'>
                <option value=''>Any</option>
                <option value='1'>1+</option>
                <option value='2'>2+</option>
                <option value='3'>3+</option>
              </select>
            </div>

            {/* Floor Area */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text text-base-content/70'>Floor Area</span>
              </label>
              <input type='text' placeholder='Min sq ft' className='input input-bordered w-full' />
            </div>

            {/* Year Built */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text text-base-content/70'>Year Built</span>
              </label>
              <select className='select select-bordered w-full'>
                <option value=''>Any</option>
                <option value='2020'>2020+</option>
                <option value='2015'>2015+</option>
                <option value='2010'>2010+</option>
                <option value='2000'>2000+</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
