// src/api.js
import axios from 'axios';
import API_CONFIG from './config';

export const fetchAirports = async (query) => {
  if (!query) return [];
  try {
    const response = await axios.get(`https://${API_CONFIG.HOST}/api/v1/flights/searchAirport`, {
      params: { query },
      headers: {
        'x-rapidapi-host': API_CONFIG.HOST,
        'x-rapidapi-key': API_CONFIG.KEY,
      },
    });
    return (
      response.data.data?.map((airport) => ({
        entityId: airport.entityId,
        skyId: airport.skyId,
        name: airport.navigation.localizedName,
      })) || []
    );
  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
};
