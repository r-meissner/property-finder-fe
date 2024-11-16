import React from 'react'
import PropertyList from '../components/PropertyList'
import SearchBar from '../components/SearchBar'

const PropertyListPage = () => {
  return (
    <div className='min-h-screen bg-base-200'>
      {/* Header Section */}
      <div className='bg-base-100 py-12'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl md:text-4xl font-bold text-base-content mb-4'>
            Browse Properties
          </h1>
          <p className='text-base-content/70 mb-8 max-w-2xl'>
            Explore our curated selection of properties. Use the filters below to find your perfect match.
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Properties Section */}
      <PropertyList />
    </div>
  )
}

export default PropertyListPage
