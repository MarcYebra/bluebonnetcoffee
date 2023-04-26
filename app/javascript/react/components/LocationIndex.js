import React from 'react';

import GeorgetownLocation from './GeorgetownLocation';
import CedarParkLocation from './CedarParkLocation';
import AustinLocation from './AustinLocation';

const LocationIndex = (props) => {

  return (
    <div>
      <GeorgetownLocation />
      <CedarParkLocation />
      <AustinLocation />
    </div>
  )
}

export default LocationIndex;