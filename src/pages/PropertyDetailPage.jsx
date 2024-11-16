import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails';

const PropertyDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const [property, setProperty] = useState({});

  useEffect(() => {
    let ignore = false;
    const getProperty = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL+`properties/${id}`);
        const data = await res.json();
        if (!ignore) {
          console.log(data);
          setProperty(data);
        }
      } catch (error) {
        console.log("Error fetching properties: ", error);
      }
    }
    getProperty();

    return () => {
      ignore = true;
    }
  }, [])

  return (
    <PropertyDetails property={property} />
  );
};

export default PropertyDetailPage;
