import { useState, useEffect } from 'react';
import { fetchPieData } from '../services/apiService';

export const usePieData = () => {
  const [pieData, setPieData] = useState<{ occupied: number; free: number; totalSpaces: number }>({
    occupied: 0,
    free: 12,
    totalSpaces: 12,
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await fetchPieData();
        setPieData({
          occupied: data.occupied,
          free: data.free,
          totalSpaces: data.occupied + data.free,
        });
      } catch (error) {
        console.error('Error fetching pie data:', error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return pieData;
};
