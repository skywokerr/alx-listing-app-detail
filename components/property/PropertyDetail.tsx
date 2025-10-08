import { useState } from 'react';
import { PropertyProps } from '@/interfaces';
import { SAMPLE_REVIEWS, PROPERTY_IMAGES } from '@/constants';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'offers' | 'reviews' | 'host'>('offers');

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-gray-600">{property.rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.name}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
            {renderStars(property.rating)}
            <span className="text-gray-600 mt-1 sm:mt-0">
              {property.address.city}, {property.address.state}, {property.address.country}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-96 rounded-xl overflow-hidden">
              <img
                src={PROPERTY_IMAGES[0]}
                alt={property.name}
                className="col-span-2 row-span-2 w-full h-full object-cover"
              />
              <img
                src={PROPERTY_IMAGES[1]}
                alt={`${property.name} - Image 2`}
                className="col-span-1 row-span-1 w-full h-full object-cover"
              />
              <img
                src={PROPERTY_IMAGES[2]}
                alt={`${property.name} - Image 3`}
                className="col-span-1 row-span-1 w-full h-full object-cover"
              />
              <img
                src={PROPERTY_IMAGES[3]}
                alt={`${property.name} - Image 4`}
                className="col-span-1 row-span-1 w-full h-full object-cover"
              />
              <img
                src={PROPERTY_IMAGES[4]}
                alt={`${property.name} - Image 5`}
                className="col-span-1 row-span-1 w-full h-full object-cover"
              />
            </div>

            {/* Tabs Section */}
            <div className="mt-8 bg-white rounded-lg shadow-sm border">
              <div className="border-b">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'offers' as const, label: 'What we offer' },
                    { id: 'reviews' as const, label: 'Reviews' },
                    { id: 'host' as const, label: 'About host' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'offers' && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">What this place offers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {property.category.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-lg">✓</span>
                          </div>
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <ReviewSection reviews={SAMPLE_REVIEWS} />
                )}

                {activeTab === 'host' && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">About your host</h3>
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1566489564594-f2163930c034?w=100"
                        alt="Host"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">Alex Thompson</h4>
                        <p className="text-gray-600">Superhost · 5 years hosting</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Welcome to our beautiful property! We're dedicated to making your stay 
                      unforgettable. With over 5 years of hosting experience, we know what 
                      makes a perfect vacation. Don't hesitate to reach out if you need anything!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;