import React from 'react';

// Import Components
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import CarMPG from '../CarMPG/CarMPG';
import CarSpeeds from '../CarSpeeds/CarSpeeds';

function checkPropVal(props) {
  const values = Object.values(props);
  let bool = false;

  values.forEach(elem => {
    if (typeof elem === 'object' && !Array.isArray(elem)) {
      const objToArr = Object.values(elem);
      objToArr.forEach(check => {
        if (check !== null) {
          bool = true;
        }
      });
    }
  });
  return bool;
}

function CarMPGandSpeeds(props) {
  if (checkPropVal(props)) {
    return (
      <Box pad={{ horizontal: 'medium' }} justify="start">
        <Heading align="center" tag="h2" margin="none">
          Mileage & Speed
        </Heading>
        <Box direction="row" justify="between" >
          <CarMPG mpg={props.mpg} />
          <CarSpeeds speeds={props.speeds} />
        </Box>
      </Box>
    );
  }
  return null;
}

export default CarMPGandSpeeds;
