import { Search, MapPin, Home, DollarSign, ArrowDownUp } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className='max-w-5xl mx-auto w-full'>
      <div className='bg-white rounded-2xl shadow-xl p-2 md:p-4'>
        {/* Main Search Controls */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
          {/* Location */}
          <div className='form-control'>
            <div className='input input-lg bg-base-100 flex items-center gap-2'>
              <MapPin className='h-5 w-5 text-primary' />
              <input
                type='text'
                placeholder='Location'
                className='w-full bg-transparent focus:outline-none'
              />
            </div>
          </div>

          {/* Property Type */}
          <div className='form-control'>
            <div className='input input-lg bg-base-100 flex items-center gap-2'>
              <Home className='h-5 w-5 text-primary' />
              <select className='w-full bg-transparent focus:outline-none'>
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
            <div className='input input-lg bg-base-100 flex items-center gap-2'>
              <DollarSign className='h-5 w-5 text-primary' />
              <select className='w-full bg-transparent focus:outline-none'>
                <option value=''>Price Range</option>
                <option value='0-100000'>$0 - $100,000</option>
                <option value='100000-300000'>$100,000 - $300,000</option>
                <option value='300000-500000'>$300,000 - $500,000</option>
                <option value='500000+'>$500,000+</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button className='btn btn-primary btn-lg w-full'>
            <Search className='h-5 w-5' />
            Search
          </button>
        </div>

        {/* Advanced Filters */}
        <div className='mt-4 flex items-center gap-4'>
          <button className='btn btn-ghost btn-sm gap-2'>
            <ArrowDownUp className='h-4 w-4' />
            More Filters
          </button>

          {/* Quick Filter Pills */}
          <div className='flex flex-wrap gap-2'>
            <span className='badge badge-outline hover:badge-primary cursor-pointer'>For Sale</span>
            <span className='badge badge-outline hover:badge-primary cursor-pointer'>For Rent</span>
            <span className='badge badge-outline hover:badge-primary cursor-pointer'>Furnished</span>
            <span className='badge badge-outline hover:badge-primary cursor-pointer'>Pet Friendly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
