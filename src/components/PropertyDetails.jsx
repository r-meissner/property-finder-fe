import React from 'react';

const PropertyDetails = ({ property }) => {
  console.log(property);
  const cover = (property.images && property.images[0] || '').replace('/', '');
  return (
    <>
      {cover && <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="property-hero absolute inset-0 bg-cover bg-center h-auto" style={{
            backgroundImage: `url('https://hejoscar.fra1.cdn.digitaloceanspaces.com/departments/${cover.slice(0, 2)}/${cover.slice(2, 4)}/${cover}')`,
          }}>
            <div className="relative container z-10">
              <h1 className="text-white align-content-center">{property.title}</h1>
            </div>
          </div>
        </div>
      </div>}
      <div dangerouslySetInnerHTML={{__html: property.description}} />
    </>
  );
};

export default PropertyDetails;
