import React, { PropTypes } from 'react';
import numeral from 'numeral';

// Import Components
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import CarRating from '../CarRating/CarRating';

function CarInfo(props) {
  const price = numeral(props.info.price).format('$0,0');
  return (
    <Box justify="start" align="center" wrap={false} margin="small" pad="small" full="horizontal">
      <Heading align="center" margin="small">{`${props.info.make} ${props.info.model}`}</Heading>
      <Heading align="center" margin="small" tag="h3">{`Vehicle type: ${props.info.ln_type}`}</Heading>
      <CarRating rating={props.info.rating} />
      <Heading align="center" margin="small" tag="h3">{`Price: ${price}`}</Heading>
    </Box>
  );
}

CarInfo.propTypes = {
  info: PropTypes.object.isRequired,
};

export default CarInfo;
