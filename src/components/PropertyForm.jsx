const PropertyForm = ({ property, updateProperty, handleSubmit }) => {
  return (
    <div className="lg:w-[40vw] min-h-screen mx-auto py-8 space-y-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Title" value={property.title} onChange={(e) => updateProperty('title', e.target.value)}/>
        </label>
        <div>
          <select
            className="select select-bordered w-full"
            value={property.propertyType}
            onChange={(e) => updateProperty('propertyType', e.target.value)}>
            <option disabled value="">Select A Property Type</option>
            <option value="apartement">Apartement</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
            <option value="retail">Retail</option>
          </select>
        </div>

        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Longitude" value={property.longitude} onChange={(e) => updateProperty('longitude', e.target.value)} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Latitude" value={property.latitude} onChange={(e) => updateProperty('latitude', e.target.value)} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder='Price' value={property.price} onChange={(e) => updateProperty('price', e.target.value)} />
        </label>
        <textarea className="textarea textarea-bordered w-full" placeholder="Description" value={property.description} onChange={(e) => updateProperty('description', e.target.value)}>
        </textarea>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder='ImageUrl'value={property.imageUrl} onChange={(e) => updateProperty('imageUrl', e.target.value)} />
        </label>
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  )
};

export default PropertyForm;
