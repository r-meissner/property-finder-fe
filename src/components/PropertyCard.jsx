import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
  <div>
    <h1>{property.title}</h1>
    <p>{property.type}</p>
    <p>{property.price}</p>
    <p>{property.description}</p>
    <button><Link to={`/properties/${property._id}`}>See More</Link></button>
  </div>
  )
};

export default PropertyCard;
