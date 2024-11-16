import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, Heart, MapPin } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
      {/* Image Container */}
      <figure className='relative aspect-[4/3] w-full'>
        <img
          src={property.images?.[0] || 'https://placehold.co/400x300'}
          alt={property.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-4 left-4 flex gap-2'>
          <span className='badge badge-primary'>{property.status}</span>
          <span className='badge badge-secondary'>{property.type}</span>
        </div>
        <button className='btn btn-circle btn-sm absolute top-4 right-4 bg-base-100/80 hover:bg-base-100'>
          <Heart className='h-4 w-4' />
        </button>
      </figure>

      <div className='card-body p-4'>
        {/* Price and Location */}
        <div className='mb-2'>
          <h2 className='card-title text-2xl font-bold text-primary'>
            ${property.price?.toLocaleString()}
          </h2>
          <div className='flex items-center gap-1 text-base-content/70'>
            <MapPin className='h-4 w-4' />
            <span className='text-sm'>{property.location?.coordinates[1]},{property.location?.coordinates[0]}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className='text-lg font-semibold text-base-content line-clamp-2'>
          {property.title}
        </h3>

        {/* Features */}
        <div className='grid grid-cols-3 gap-2 my-4'>
          <div className='flex flex-col items-center p-2 bg-base-200 rounded-lg'>
            <Bed className='h-5 w-5 text-primary mb-1' />
            <span className='text-sm'>{property.bedrooms} Beds</span>
          </div>
          <div className='flex flex-col items-center p-2 bg-base-200 rounded-lg'>
            <Bath className='h-5 w-5 text-primary mb-1' />
            <span className='text-sm'>{property.bathrooms} Baths</span>
          </div>
          <div className='flex flex-col items-center p-2 bg-base-200 rounded-lg'>
            <Maximize className='h-5 w-5 text-primary mb-1' />
            <span className='text-sm'>{property.area} ft²</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='card-actions justify-end mt-2'>
          <Link
            to={`/properties/${property._id}`}
            className='btn btn-primary btn-block'
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
