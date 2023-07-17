"use client"
import {useState} from 'react';


const Form = ({distance, setDistance, handleSubmit}) => {
  // const [distance, setDistance] = useState('')
  // const [distanceData, setDistanceData] = useState(0)

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setDistance('');
  //   setDistanceData(`${distance}`)
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="integer"
        id="distance"
        value={distance}
        onChange={(event) =>
          setDistance(event.target.value)
        }
      />


      <button type="submit">Submit</button>

      {/* <br />
      <br />
      <h2>{distance}</h2> */}
    </form>
  );
}


export default Form;
