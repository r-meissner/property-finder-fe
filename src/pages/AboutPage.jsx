import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <p className="text-lg text-gray-700 text-center">
        <strong>Welcome to NestFinder</strong> – your trusted partner in discovering the perfect property.
      </p>
      <p className="text-gray-600 leading-relaxed">
        At NestFinder, we believe that finding a home or property should be a seamless, inspiring journey. Whether
        you’re searching for a cozy apartment, a spacious family house, a vibrant office, or a unique investment
        opportunity, we’re here to simplify your experience and help you find the property that feels just right.
      </p>
      <h2 className="text-2xl font-semibold">Who We Are</h2>
      <p className="text-gray-600 leading-relaxed">
        NestFinder is more than just a property search platform; it’s a community-driven solution designed to
        connect people with properties that match their needs, lifestyles, and dreams. Backed by a team of passionate
        real estate experts and tech enthusiasts, we combine industry insights with cutting-edge technology to make
        property searching smarter, faster, and more reliable.
      </p>
      <h2 className="text-2xl font-semibold">What We Offer</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>
          <strong>A Wide Range of Listings:</strong> Explore a diverse portfolio of properties, from modern
          apartments to luxurious villas and everything in between.
        </li>
        <li>
          <strong>User-Friendly Search:</strong> Our advanced filters and interactive maps allow you to narrow
          down your search with precision.
        </li>
        <li>
          <strong>Local Expertise:</strong> We provide detailed insights about neighborhoods, schools, amenities,
          and market trends to help you make informed decisions.
        </li>
        <li>
          <strong>Personalized Experience:</strong> Save your favorite listings, receive tailored recommendations,
          and access property updates that matter to you.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold">Our Mission</h2>
      <p className="text-gray-600 leading-relaxed">
        At NestFinder, our mission is simple: to redefine property discovery by making it intuitive, transparent,
        and centered on you. We aim to empower everyone – whether you're a first-time renter, a seasoned buyer, or a
        real estate investor – to find their perfect nest effortlessly.
      </p>
      <h2 className="text-2xl font-semibold">Why Choose NestFinder?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>
          <strong>Trust & Transparency:</strong> We prioritize accuracy in every listing and foster relationships
          built on trust.
        </li>
        <li>
          <strong>Innovation & Simplicity:</strong> With technology at the heart of what we do, we continuously
          refine our platform to provide the best user experience.
        </li>
        <li>
          <strong>Commitment to Community:</strong> We don’t just find properties; we help you find a place to
          call home.
        </li>
      </ul>
      <p className="text-lg text-gray-700 text-center">
        Join the NestFinder journey. Explore, dream, and discover your perfect property – because at NestFinder,
        <strong> we help you find where you belong.</strong>
      </p>
    </div>
  );
};

export default AboutPage;
