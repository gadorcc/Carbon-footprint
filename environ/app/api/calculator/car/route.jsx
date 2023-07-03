'use client'

import { useEffect, useState } from 'react';

const MyComponent = ({distance}) => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://app.trycarbonapi.com/api/carTravel', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + API_CARBON,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            distance: 5,
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
      <p>{distance}</p>
    </div>
  );
};

export default MyComponent;
