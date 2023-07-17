'use client'

import { useEffect, useState } from 'react';
console.log({'Authorization': `Bearer ${process.env.API_CARBON}`});

const MyComponent = ({distance}) => {
  const [responseData, setResponseData] = useState(null);
  // const auth = process.env.API_CARBON;


  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://app.trycarbonapi.com/api/carTravel', {
          method: 'POST',
          headers: {
            // 'Authorization': '',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            distance: distance,
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
