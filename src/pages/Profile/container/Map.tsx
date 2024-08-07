import React, { useEffect, useRef, useState } from 'react';
import opencage from 'opencage-api-client'; // Ensure this is correctly configured with your API key

const loadYandexMaps = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    if (window.ymaps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=94928bb3-84ba-4440-bda3-8974d19d38ac'; 
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Yandex Maps API'));
    document.head.appendChild(script);
  });
};

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isYmapsLoaded, setIsYmapsLoaded] = useState(false);
  const [map, setMap] = useState<ymaps.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [userAddress, setUserAddress] = useState<string>('');

  useEffect(() => {
    loadYandexMaps()
      .then(() => {
        setIsYmapsLoaded(true);
        console.log('Yandex Maps API loaded successfully');
      })
      .catch((error) => console.error('Error loading Yandex Maps API:', error));
  }, []);

  useEffect(() => {
    if (isYmapsLoaded && window.ymaps && mapContainerRef.current) {
      window.ymaps.ready(() => {
        const newMap = new window.ymaps.Map(mapContainerRef.current, {
          center: [41.2995, 69.2401],
          zoom: 14,
        });

        setMap(newMap);

        newMap.events.add('click', async (event: ymaps.MapEvent) => {
          const coords = event.get('coords') as [number, number];
          setUserLocation(coords);

          try {
            const address = await reverseGeocode(coords[0], coords[1]);
            setUserAddress(address);

            const marker = new window.ymaps.Placemark(
              coords,
              {
                balloonContent: address,
              },
              {
                preset: 'islands#redIcon',
              }
            );
            newMap.geoObjects.add(marker);
          } catch (error) {
            console.error('Error during geocoding:', error);
            setUserAddress('Address not available');
          }
        });

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation([latitude, longitude]);

              newMap.setCenter([latitude, longitude]);

              const userMarker = new window.ymaps.Placemark(
                [latitude, longitude],
                {
                  balloonContent: 'You are here',
                },
                {
                  preset: 'islands#blueCircleIcon',
                }
              );

              newMap.geoObjects.add(userMarker);

              try {
                const address = await reverseGeocode(latitude, longitude);
                setUserAddress(address);
              } catch (error) {
                console.error('Error during geocoding:', error);
                setUserAddress('Address not available');
              }
            },
            (error) => {
              console.error('Error getting location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      });
    }
  }, [isYmapsLoaded]);

  const reverseGeocode = async (latitude: number, longitude: number): Promise<string> => {
    try {
      const response = await opencage.geocode({
        q: `${latitude},${longitude}`,
        key: 'd95fad497c0b4b039a93e7315e9a5b60', // Replace with your actual API key
        language: 'en',
      });
      console.log('Coordinates for geocoding:', `${latitude},${longitude}`);

      if (response.status.code === 200) {
        if (response.results.length > 0) {
          const components = response.results[0].components;
          const formattedAddress = `${components.road || ''} ${components.house_number || ''}, ${components.suburb || ''}, ${components.city || ''}, ${components.state || ''}, ${components.country || ''}`;
          return formattedAddress.trim();
        } else {
          throw new Error('No address found for these coordinates.');
        }
      } else {
        throw new Error(`Geocoding error: ${response.status.message}`);
      }
    } catch (error) {
      console.error('Error during geocoding:', error);
      return 'Address not available';
    }
  };

  const handleSaveLocation = () => {
    if (userLocation) {
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
      localStorage.setItem('userAddress', userAddress);
      alert('Location saved successfully!');
    } else {
      alert('No location selected.');
    }
  };

  return (
    <>
      <form className="h-full relative">
        <div className="space-y-4 h-full">
          <p className="my-4 text-telegram-black absolute z-10 top-10 left-[0] w-full text-center font-bold text-2xl px-4 dark:text-black">
            {userAddress || 'Ташкент, Ўзбекистон'}
          </p>
          <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="p-2 md:w-[500px] container mx-auto absolute z-30 bottom-16 right-0 left-0 bg-transparent shadow-top">
          <button
            type="button"
            onClick={handleSaveLocation}
            className="text-white bg-[#2F9155] cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden mt-3 rounded-xl"
          >
            Сохранить адрес
          </button>
        </div>
      </form>
    </>
  );
};

export default Map;
