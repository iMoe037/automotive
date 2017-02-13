import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Components
import Card from 'grommet/components/Card';
import Tile from 'grommet/components/Tile';

function CarListItem(props) {
  return (
    <Tile>
      <Link to={`cars/${props.car._id}`}>
        <Card
          textAlign="center"
          thumbnail={props.car.images[0]}
          heading={`${props.car.make} ${props.car.model}`}
          description={props.car.overview}
          headingStrong={false}
        />
      </Link>
    </Tile>
  );
}

CarListItem.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarListItem;

