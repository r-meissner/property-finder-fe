import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const CreateProperty = () => {

  const [title, setTitle] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
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
      title,
      type: propertyType,
      location: {
        type: 'Point',
        coordinates: [parseFloat(longitude), parseFloat(latitude)]
      },
      price: parseFloat(price),
      description,
      images: [imageUrl],
    };
    await createProperty(newProperty);
    navigate(`/properties`);
  }


  return (
  <div className="lg:w-[40vw] min-h-screen mx-auto py-8 space-y-6">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <div>
        <select
          className="select select-bordered w-full"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}>
          <option disabled value="">Select A Property Type</option>
          <option value= "apartement">Apartement</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="villa">Villa</option>
          <option value="office">Office</option>
          <option value="retail">Retail</option>
        </select>
      </div>

      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <textarea className="textarea textarea-bordered w-full" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}>
      </textarea>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder='ImageUrl'value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <button className="btn btn-primary" type="submit">List New Property</button>
    </form>
  </div>
)};

export default CreateProperty;
