import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { geocodeCoordinates } from '../components/geocodeUtils'; // Adjust path as needed

const Address: React.FC = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [userAddress, setUserAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    const savedAddress = localStorage.getItem('userAddress');

    if (savedLocation) {
      setUserLocation(JSON.parse(savedLocation));
    }

    if (savedAddress) {
      setUserAddress(savedAddress);
    } else if (savedLocation) {
      // If address is not available but location is, fetch the address
      fetchAddressFromCoordinates(JSON.parse(savedLocation));
    }
  }, []);

  const fetchAddressFromCoordinates = async (coords: [number, number]) => {
    setLoading(true);
    try {
      const address = await geocodeCoordinates(coords[0], coords[1]);
      setUserAddress(address);
      localStorage.setItem('userAddress', address);
      setError(null);
    } catch (err) {
      setError('Failed to retrieve address.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white h-full">
      <Link
        className="flex items-center py-4 px-2 cursor-pointer"
        to="/map"
      >
        <p className="flex-1 text-telegram-black">Добавить адрес</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          width="24"
          className="text-telegram-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </Link>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userLocation && (
        <div className="mt-4">
          <p className="text-telegram-black font-bold">Saved Address:</p>
          <p className="text-telegram-black">Address: {userAddress || 'Address not available'}</p>
          <p className="text-telegram-black">Location: {userLocation[0]}, {userLocation[1]}</p>
        </div>
      )}
    </div>
  );
};

export default Address;
