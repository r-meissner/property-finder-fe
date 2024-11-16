import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const getAllProperties = async () => {
      try {
        setLoading(true);
        const res = await fetch(import.meta.env.VITE_API_URL + "properties");
        const data = await res.json();

        if (!ignore) {
          setProperties(data.properties);
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

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse'>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className='h-[400px] bg-base-200 rounded-xl'></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='alert alert-error'>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
