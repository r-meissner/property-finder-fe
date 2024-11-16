import React, { useEffect, useState } from 'react'
import PropertyForm from '../components/PropertyForm'
import { useNavigate, useParams } from 'react-router-dom'

const EditPropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState({
    title: '',
    propertyType: '',
    longitude: '',
    latitude: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  const updateProperty = (key, value) => {
    setProperty({...property, [key]: value});
  };

  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let ignore = false;
    const getProperty = async () => {
      try {
        const res = await fetch(`${API_URL}properties/${id}`);

        const property = await res.json();
        property.propertyType = property.type || '';
        property.longitude = property.location.coordinates[0] || '';
        property.latitude = property.location.coordinates[1] || '';
        property.imageUrl = property.images[0] || '';

        setProperty(property);
      } catch (error) {
        console.log("Error fetching properties: ", error);
      }
    }
    getProperty();

    return () => {
      ignore = true;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProperty = {
      title: property.title,
      type: property.propertyType,
      location: {
        type: 'Point',
        coordinates: [parseFloat(property.longitude), parseFloat(property.latitude)]
      },
      price: parseFloat(property.price),
      description: property.description,
      images: [property.imageUrl],
    };
    const response = await fetch(`${API_URL}properties/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProperty),
    });
    navigate(`/properties/${property._id}`);
  }

  return (
    <div><PropertyForm property={property} updateProperty={updateProperty} handleSubmit={handleSubmit} /></div>
  )
}

export default EditPropertyPage
