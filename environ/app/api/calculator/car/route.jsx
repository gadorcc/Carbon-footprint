'use client'

import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://app.trycarbonapi.com/api/carTravel', {
          method: 'POST',
          headers: {
            'Authorization': process.env.API_CARBON,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            distance: 50,
            vehicle: 'SmallDieselCar'
          })
        });

        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {responseData && <p>{responseData.carbon}</p>}
    </div>
  );
};

export default MyComponent;
