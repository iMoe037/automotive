import React, { PropTypes } from 'react';

// Import Components
import Box from 'grommet/components/Box';
import Star from 'grommet/components/icons/base/Star';
import StarHalf from 'grommet/components/icons/base/StarHalf';
import Heading from 'grommet/components/Heading';

function genStars(rating) {
  const numStars = parseInt(rating, 10);
  const halfStar = (rating % 1) !== 0;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push(<Star key={`Star-${i}`} />);
  }

  if (halfStar) {
    stars.push(<StarHalf key="Star-half" />);
  }

  return stars;
}

function CarRating(props) {
  if (props.rating) {
    return (
      <Box direction="row">
        <Heading align="center" margin="small" tag="h3">Rating: {genStars(props.rating)}</Heading>
      </Box>
    );
  }
  return null;
}

CarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default CarRating;
