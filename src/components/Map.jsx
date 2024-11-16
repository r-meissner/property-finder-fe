import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import {
  Home,
  Building2,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Phone,
  Eye,
  Star,
  ArrowUpRight,
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// create custom marker icons with theme-aware design
const createCustomIcon = (type, price) => {
  const getIconContent = (propertyType) => {
    switch (propertyType.toLowerCase()) {
      case 'house':
        return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.7 2.4c1-1.4 3.1-1.4 4.1 0l7.5 10.6c1.1 1.6.1 3.8-1.8 3.8H3.5c-1.9 0-2.9-2.2-1.8-3.8l7.5-10.6z"/>
        </svg>`;
      case 'apartment':
        return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 16h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2zm5 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2z"/>
        </svg>`;
      default:
        return `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        </svg>`;
    }
  };

  return divIcon({
    className: '',
    html: `
      <div class="marker-container group">
        <div class="marker-icon bg-primary shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-2">
          <div class="icon-wrapper text-primary-content">
            ${getIconContent(type)}
          </div>
          <div class="price-tag opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 -translate-x-1/2 bg-base-100 text-base-content px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-base-300">
            ${price}
          </div>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -36],
  });
};

const PropertyPopup = ({ property, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className='w-[380px] overflow-hidden rounded-xl bg-base-100 shadow-2xl transform transition-transform duration-300'>
      {/* Image Gallery Section */}
      <div className='relative h-56 w-full group'>
        <div className='absolute inset-0 flex transition-transform duration-300'>
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.title} - View ${index + 1}`}
              className={`h-full w-full flex-shrink-0 object-cover transition-opacity duration-300 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            />
          ))}
        </div>

        {/* Dark Overlay for Better Contrast */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20'></div>

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className='btn btn-circle btn-sm bg-black/50 hover:bg-black/70 border-0 text-white'
            >
              ❮
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className='btn btn-circle btn-sm bg-black/50 hover:bg-black/70 border-0 text-white'
            >
              ❯
            </button>
          </div>
        )}

        {/* Status and Actions */}
        <div className='absolute top-4 left-4 flex gap-2'>
          <span className='badge badge-primary badge-lg font-semibold'>{property.status}</span>
          <span className='badge badge-secondary badge-lg'>{property.type}</span>
        </div>
        <button
          className='btn btn-circle btn-sm absolute top-4 right-4 bg-black/50 hover:bg-black/70 border-0 text-white'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Heart className='h-4 w-4' />
        </button>

        {/* Price and Rating */}
        <div className='absolute mt-32 left-5 right-5'>
          <div className='flex items-center gap-2 text-base-content/90'>
            <p className='text-4xl font-bold text-base-content pr-10'>{property.price}</p>
            <Star className='h-4 w-4 fill-warning stroke-warning' />
            <span className='font-medium'>{property.rating}</span>
            <span className='text-sm text-base-content/70'>({property.reviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className='p-5 bg-base-100'>
        <div className='mb-4'>
          <h3 className='text-lg font-bold text-base-content hover:text-primary transition-colors cursor-pointer'>
            {property.title}
          </h3>
        </div>

        {/* Features Cards */}
        <div className='grid grid-cols-3 gap-3 mb-4'>
          <div className='bg-base-200 rounded-lg p-3 text-center hover:bg-base-300 transition-colors'>
            <Bed className='h-5 w-5 text-primary mx-auto mb-1' />
            <span className='text-sm font-medium text-base-content'>{property.bedrooms} Beds</span>
          </div>
          <div className='bg-base-200 rounded-lg p-3 text-center hover:bg-base-300 transition-colors'>
            <Bath className='h-5 w-5 text-primary mx-auto mb-1' />
            <span className='text-sm font-medium text-base-content'>
              {property.bathrooms} Baths
            </span>
          </div>
          <div className='bg-base-200 rounded-lg p-3 text-center hover:bg-base-300 transition-colors'>
            <Maximize className='h-5 w-5 text-primary mx-auto mb-1' />
            <span className='text-sm font-medium text-base-content'>{property.area} ft²</span>
          </div>
        </div>

        {/* Amenities Tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {property.amenities.map((amenity, index) => (
            <span key={index} className='badge badge-outline badge-primary badge-sm'>
              {amenity}
            </span>
          ))}
        </div>

        {/* Agent Info & Actions */}
        <div className='flex items-center justify-between pt-4 border-t border-base-200'>
          <div className='flex items-center gap-3'>
            <div className='avatar'>
              <div className='w-10 h-10 rounded-full ring-2 ring-primary ring-offset-2'>
                <img src={property.agent.image} alt={property.agent.name} />
              </div>
            </div>
            <div>
              <p className='font-semibold text-sm text-base-content'>{property.agent.name}</p>
              <p className='text-xs text-base-content/70'>{property.agent.phone}</p>
            </div>
          </div>
          <Link
            to={`/properties/${property._id}`}
            className='btn btn-outline btn-sm gap-2'
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            View Details
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </div>
  );
};

const RecenterAutomatically = ({lat,lng}) => {
 const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
}

const Map = ({ size = 'large' }) => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    let ignore = false;

    const getAllProperties = async () => {
      try {
        setLoading(true);
        const res = await fetch(import.meta.env.VITE_API_URL + "properties?paginated=false");
        const data = await res.json();

        if (!ignore) {
          setProperties(data.properties.map(property => {
            property.lng = property.location.coordinates[0] || '';
            property.lat = property.location.coordinates[1] || '';
            property.amenities = [];
            property.agent = {};
            property.rating = Math.random() * 5;
            property.reviews = Math.random() * 100;
            property.bedrooms = '';
            property.bathrooms = '';
            property.area = '';

            return property;
          }));
        }
      } catch (error) {
        console.error("Error fetching properties: ", error);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getAllProperties();
    return () => {
      ignore = true;
    };
  }, []);

  const sizeClasses = {
    large: 'h-[700px] w-full rounded-2xl',
    medium: 'h-[500px] w-full rounded-xl',
    small: 'h-[300px] w-full rounded-lg',
  };

  return (
    <div className={`${sizeClasses[size]} shadow-2xl overflow-hidden relative group`}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className='h-full w-full'
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        />
        <ZoomControl position='bottomright' />

        {properties.map((property) => (
          <Marker
            key={property._id}
            position={[property.lat, property.lng]}
            icon={createCustomIcon(property.type, property.price)}
          >
            <Popup className='property-popup' maxWidth={400}>
              <PropertyPopup property={property} />
            </Popup>
          </Marker>
        ))}
        <RecenterAutomatically lat={properties[0]?.lat || 51.505} lng={properties[0]?.lng || -0.09} />
      </MapContainer>
    </div>
  );
};

export default Map;
