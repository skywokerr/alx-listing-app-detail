import { useState } from '..react';
import { BookingFormData } from '../interfaces';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  const calculateTotal = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights * price : price;
    }
    return price;
  };

  const total = calculateTotal();

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 sticky top-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">${price.toLocaleString()}</h3>
        <p className="text-gray-600">per night</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>${price.toLocaleString()} × {total / price} nights</span>
            <span>${total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Cleaning fee</span>
            <span>$150</span>
          </div>
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>${Math.round(total * 0.1).toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-bold">${(total + 150 + Math.round(total * 0.1)).toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
        Reserve Now
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingSection;