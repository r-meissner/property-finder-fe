import { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    let ignore = false;
    const getAllProperties = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL+"properties");
        const data = await res.json();
        if (!ignore) {
          console.log(data.properties);
          setProperties(data.properties);
        }
      } catch (error) {
        console.log("Error fetching properties: ", error);
      }
    }
    getAllProperties();

    return () => {
      ignore = true;
    }
  }, [])
  
  
  return <div>

  </div>;
};

export default PropertyList;
