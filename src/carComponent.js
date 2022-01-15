import React from 'react';

const CarComponent = (props) => {
    return (
      <div>
        <h1> Car Speed :{props.details.speed} </h1>
        <h2> Car Size : {props.details.size} </h2>
      </div>
    )
  }

  export default CarComponent;
