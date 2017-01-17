import React, { PropTypes } from 'react';
import numeral from 'numeral';

// Import Components
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import CarRating from '../CarRating/CarRating';

function vehicleType(prop) {
  if (prop) {
    return (
      <Heading align="center" margin="small" tag="h3">{`Vehicle type: ${prop}`}</Heading>
    );
  }
  return null;
}

function rateExists(rate) {
  if (rate) {
    return (
      <CarRating rating={rate} />
    );
  }
  return null;
}

function createPrice(price, msrp) {
  if (price !== '$0') {
    return (
      <Heading align="center" margin="small" tag="h3">{`Price: ${price}`}</Heading>
    );
  } else if (msrp) {
    return (
      <Heading align="center" margin="small" tag="h3">{`MSRP: ${msrp}`}</Heading>
    );
  }
  return null;
}

function CarInfo(props) {
  const price = numeral(props.info.price).format('$0,0');
  return (
    <Box justify="start" align="center" wrap={false} margin="small" pad="small" full="horizontal">
      <Heading align="center" margin="small">{`${props.info.make} ${props.info.model}`}</Heading>
      {vehicleType(props.info.ln_type)}
      {rateExists(props.info.rating)}
      {createPrice(price, props.info.msrp)}
    </Box>
  );
}

CarInfo.propTypes = {
  info: PropTypes.object.isRequired,
};

export default CarInfo;
