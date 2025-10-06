const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">StayEase</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, properties, or amenities..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="flex items-center justify-between py-3 border-t">
          <div className="flex space-x-8 overflow-x-auto">
            {["Rooms", "Mansion", "Countryside", "Beach", "City", "Mountain", "Luxury", "Budget"].map((type) => (
              <button
                key={type}
                className="whitespace-nowrap text-gray-600 hover:text-blue-600 font-medium"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;