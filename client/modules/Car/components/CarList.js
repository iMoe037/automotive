import React, { PropTypes } from 'react';

// Import Components
import Tiles from 'grommet/components/Tiles';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import CarListItem from './CarListItem/CarListItem';

function CarList(props) {
  return (
    <Split separator={true} flex="right">
      <Box justify="center" align="center" pad="medium">
        <ul>
          <li>Item long long long</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </Box>
      <Box justify="center" align="center" pad="medium">
        <Tiles fill={false} flush={false} >
        {
          props.cars.map(car => (
            <CarListItem key={car.model} car={car} />
          ))
        }
        </Tiles>
      </Box>
    </Split>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CarList;
