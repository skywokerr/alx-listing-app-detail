import { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, FILTERS } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/Pill';

const HeroSection = () => {
  return (
    <section 
      className="relative h-96 bg-cover bg-center bg-gray-900"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        {property.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {property.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-gray-700">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">${property.price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
          <div className="text-sm text-gray-600">
            {property.offers.bed} bed • {property.offers.shower} shower
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {FILTERS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Listing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;