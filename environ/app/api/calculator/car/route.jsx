'use client'

import { useEffect, useState } from 'react';
console.log({'Authorization': `Bearer ${process.env.API_CARBON}`});

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);
  const  [inputValue, setInputValue] =  useState('');
  const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://app.trycarbonapi.com/api/carTravel', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            distance: {inputValue},
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
      <form>
	<label>Distance Km:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label>
	<p>Input Value: {inputValue}</p>
  </form>
      {responseData && <p>{responseData.carbon}</p>}
      <p></p>
    </div>
  );
};




// const  Test = () => {
// 	// const  [inputValue, setInputValue] =  useState('');

// 	const  handleChange = (event) => {
// 		setInputValue(event.target.value);
// 	};

// return  (
// <form>
// 	<label>Distance Km:
// 	<input  type="text"  value={inputValue} onChange={handleChange} />
// 	</label>
// 	<p>Input Value: {inputValue}</p>
// </form>
// )};



export default MyComponent;
