import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

import PropertyForm from '../components/PropertyForm'

const CreatePropertyPage = () => {
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

  const createProperty = async (property) => {
    const res = await fetch(`${API_URL}properties`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(property)
    });
    return res.json();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProperty = {
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
    const response = await createProperty(newProperty);
    navigate(`/properties/${response._id}`);
  }

  return (
    <div><PropertyForm property={property} updateProperty={updateProperty} handleSubmit={handleSubmit} /></div>
  )
}

export default CreatePropertyPage
