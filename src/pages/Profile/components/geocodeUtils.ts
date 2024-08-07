// geocodeUtils.ts
import opencage from 'opencage-api-client';

const API_KEY = '66b341cbcf4e8897902791suhc096c9'; // Replace with your OpenCage API key

export const geocodeCoordinates = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const response = await opencage.geocode({
      q: `${latitude},${longitude}`,
      key: API_KEY,
      language: 'en',
    });

    if (response.status.code === 200 && response.results.length > 0) {
      return response.results[0].formatted;
    } else {
      throw new Error('No address found for these coordinates.');
    }
  } catch (error) {
    console.error('Error during geocoding:', error);
    throw error;
  }
};
