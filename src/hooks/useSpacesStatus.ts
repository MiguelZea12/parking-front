import { useState, useEffect } from 'react';
import { fetchSpacesStatus } from '../services/apiService';

export const useSpacesStatus = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await fetchSpacesStatus();
        setSpaces(data);
      } catch (error) {
        console.error('Error fetching spaces status:', error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return spaces;
};
